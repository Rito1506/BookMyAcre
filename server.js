import express from "express";
import nodemailer from "nodemailer";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = Number(process.env.PORT || 4000);
const allowedOrigins = (
  process.env.CORS_ORIGINS ||
  "http://localhost:5173,https://www.bookmyacre.com,https://bookmyacre.com"
)
  .split(",")
  .map((origin) => origin.trim());
const mailTo = process.env.MAIL_TO || "adminmkt66@gmail.com";
const mailFrom = process.env.MAIL_FROM || "no-reply@bookmyacre.com";
const replySubject =
  process.env.AUTO_REPLY_SUBJECT || "Thank you for contacting BookMyAcre";
const siteName = process.env.SITE_NAME || "BookMyAcre";

const sanitize = (value) =>
  typeof value === "string" ? value.trim().replace(/<[^>]*>/g, "") : "";
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const containsHeaderInjection = (value) =>
  /[\r\n]|content-type:|bcc:|cc:|to:/i.test(value);

const rateLimits = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 1;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.use((req, res, next) => {
  if (req.method !== "POST" || req.path !== "/api/mail") {
    return next();
  }

  const ip =
    req.ip ||
    req.headers["x-forwarded-for"] ||
    req.connection?.remoteAddress ||
    "unknown";
  const now = Date.now();
  const entry = rateLimits.get(ip) || { count: 0, firstRequestTime: now };

  if (now - entry.firstRequestTime > RATE_LIMIT_WINDOW) {
    entry.count = 0;
    entry.firstRequestTime = now;
  }

  entry.count += 1;
  rateLimits.set(ip, entry);

  if (entry.count > MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      message: "Too many submissions. Please wait 60 seconds and try again.",
    });
  }

  next();
});

const createTransporter = async () => {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASS
          ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            }
          : undefined,
    });
  }

  if (process.env.NODE_ENV !== "production") {
    const testAccount = await nodemailer.createTestAccount();
    console.log("Using Ethereal test account:", testAccount.user);
    return nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: testAccount,
    });
  }

  return nodemailer.createTransport({
    sendmail: true,
    newline: "unix",
    path: "/usr/sbin/sendmail",
  });
};

app.post("/api/mail", async (req, res) => {
  const {
    name = "",
    email = "",
    phone = "",
    company = "",
    message = "",
    website = "",
  } = req.body;

  if (website) {
    return res.json({ success: true, message: "Thank you for your message." });
  }

  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safePhone = sanitize(phone);
  const safeCompany = sanitize(company);
  const safeMessage = sanitize(message);

  if (!safeName) {
    return res
      .status(400)
      .json({ success: false, message: "Name is required." });
  }

  if (!safeEmail) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required." });
  }

  if (!validateEmail(safeEmail)) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter a valid email address." });
  }

  if (!safeMessage || safeMessage.length < 10) {
    return res.status(400).json({
      success: false,
      message: "Message must be at least 10 characters.",
    });
  }

  if (
    [safeName, safeEmail, safePhone, safeCompany, safeMessage].some(
      containsHeaderInjection,
    )
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid input detected." });
  }

  const emailText = `New contact form submission:\n\nName: ${safeName}\nEmail: ${safeEmail}\nPhone: ${safePhone || "N/A"}\nCompany: ${safeCompany || "N/A"}\n\nMessage:\n${safeMessage}`;
  const htmlMessage = `
    <h2>New contact request</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Phone:</strong> ${safePhone || "N/A"}</p>
    <p><strong>Company:</strong> ${safeCompany || "N/A"}</p>
    <p><strong>Message:</strong></p>
    <p>${safeMessage.replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const transporter = await createTransporter();

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: `New contact from ${safeName}`,
      text: emailText,
      html: htmlMessage,
      replyTo: safeEmail,
    });

    if (process.env.DISABLE_AUTO_REPLY !== "true") {
      await transporter.sendMail({
        from: mailFrom,
        to: safeEmail,
        subject: replySubject,
        text: `Hi ${safeName},\n\nThank you for contacting ${siteName}. We received your message and will reply shortly.\n\nYour message:\n${safeMessage}\n\nBest regards,\n${siteName}`,
      });
    }

    return res.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form mail error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to send your message right now. Please try again later.",
    });
  }
});

const __dirname = dirname(fileURLToPath(import.meta.url));
const staticPath = join(__dirname, "dist");
app.use(express.static(staticPath));
app.get("*", (req, res) => {
  res.sendFile(join(staticPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(
    `Mail API and static server listening at http://localhost:${PORT}`,
  );
});

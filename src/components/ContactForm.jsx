import { useState } from "react";
import "./ContactForm.css";

const MAIL_ENDPOINT = import.meta.env.VITE_MAIL_ENDPOINT || "/api/mail";

const validateForm = (form) => {
  const errors = {};

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const updatedForm = { ...form, [name]: value };
      const newErrors = validateForm(updatedForm);
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const newErrors = validateForm(form);
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setMessage("");

    const newErrors = validateForm(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
        company: true,
        message: true,
      });
      setLoading(false);
      return;
    }

    try {
      const body = new URLSearchParams();
      Object.entries(form).forEach(([key, value]) => body.append(key, value));

      const response = await fetch(MAIL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      const text = await response.text();
      let result = null;
      try {
        result = JSON.parse(text);
      } catch (parseError) {
        console.error("Server returned invalid JSON:", response.status, text);
        setStatus("error");
        setMessage(
          `Server returned unexpected response (${response.status}). ${text.trim().slice(0, 200)}`,
        );
        setLoading(false);
        return;
      }

      if (!response.ok || !result.success) {
        setStatus("error");
        setMessage(
          result.message ||
            "Unable to send your message. Please try again or call +91 8796951483.",
        );
      } else {
        setStatus("success");
        setMessage(
          result.message ||
            "Thank you! Your message has been sent successfully.",
        );
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          website: "",
        });
        setErrors({});
        setTouched({});
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        "Network error. Please try again later or call +91 8796951483.",
      );
    } finally {
      setLoading(false);
    }
  };

  const isFieldInvalid = (fieldName) => touched[fieldName] && errors[fieldName];

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        autoComplete="off"
        tabIndex={-1}
        style={{ display: "none" }}
      />

      <div className="contact-form__grid">
        <div className="contact-form__col">
          <div className="contact-form__group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {isFieldInvalid("name") && (
              <span className="contact-form__error-text">{errors.name}</span>
            )}
          </div>
          <div className="contact-form__group">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                isFieldInvalid("email") ? "contact-form__input--error" : ""
              }
            />
            {isFieldInvalid("email") && (
              <span className="contact-form__error-text">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="contact-form__col">
          <div className="contact-form__group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {isFieldInvalid("phone") && (
              <span className="contact-form__error-text">{errors.phone}</span>
            )}
          </div>
          {/* <div className="contact-form__group">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {isFieldInvalid("company") && (
              <span className="contact-form__error-text">{errors.company}</span>
            )}
          </div> */}
        </div>
        <div className="contact-form__col contact-form__col--full">
          <div className="contact-form__group">
            <textarea
              name="message"
              placeholder="Message *"
              rows={5}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                isFieldInvalid("message") ? "contact-form__input--error" : ""
              }
            />
            {isFieldInvalid("message") && (
              <span className="contact-form__error-text">{errors.message}</span>
            )}
          </div>
        </div>
      </div>

      {status === "success" && (
        <p className="contact-form__success">
          <i className="fas fa-check-circle" /> {message}
        </p>
      )}
      {status === "error" && (
        <p className="contact-form__error">
          <i className="fas fa-exclamation-circle" /> {message}
        </p>
      )}

      <div className="contact-form__submit">
        <button
          type="submit"
          className="btn btn-filled"
          disabled={loading || Object.keys(errors).length > 0}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              Contact Us Today <i className="fas fa-arrow-right" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

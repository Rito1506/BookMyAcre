import "./InnerPage.css";

export default function PrivacyPage() {
  return (
    <div className="inner-page">
      <div
        className="page-hero"
        style={{ backgroundImage: "url(/img/bg/blog.jpg)" }}
      >
        <div className="container">
          <h1 className="fade-in">Privacy Policy</h1>
        </div>
      </div>
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ marginBottom: "2rem" }}>
            Privacy <span className="text-primary">Policy</span>
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              fontSize: "0.9rem",
              lineHeight: 1.9,
            }}
          >
            <p>
              This Privacy Policy describes how Book My Acre ("we", "us", or
              "our") collects, uses, and shares information when you use our
              website and services.
            </p>
            <h3
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: 0,
                textTransform: "none",
              }}
            >
              Information We Collect
            </h3>
            <p>
              We collect information you provide directly to us, including your
              name, email address, phone number, and any other information you
              choose to provide when you fill out our contact form or
              communicate with us.
            </p>
            <h3
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: 0,
                textTransform: "none",
              }}
            >
              How We Use Your Information
            </h3>
            <p>
              We use the information we collect to respond to your inquiries,
              provide our real estate advisory services, send you relevant
              updates about land parcels and market insights, and improve our
              website and services.
            </p>
            <h3
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: 0,
                textTransform: "none",
              }}
            >
              Information Sharing
            </h3>
            <p>
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties without your consent,
              except to comply with law, protect our rights, or provide services
              on our behalf.
            </p>
            <h3
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: 0,
                textTransform: "none",
              }}
            >
              Contact Us
            </h3>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at{" "}
              <a
                href="mailto:adminmkt66@gmail.com"
                style={{ color: "var(--primary)" }}
              >
                info@bookmyacre.com
              </a>
              .
            </p>
            <p style={{ color: "#aaa", fontSize: "0.8rem" }}>
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

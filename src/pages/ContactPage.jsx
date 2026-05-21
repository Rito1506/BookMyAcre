import ContactForm from "../components/ContactForm";
import "./InnerPage.css";

export default function ContactPage() {
  return (
    <div className="inner-page">
      <div
        className="page-hero"
        style={{
          backgroundImage: "url(/img/bg/contacts.png)",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="container">
          <h1 className="fade-in">Contact Us</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-page-grid">
            {/* Info */}
            <div className="contact-info-box">
              <div>
                <h2>
                  Get In <span className="text-primary">Touch</span>
                </h2>
                <div
                  className="section-divider"
                  style={{ margin: "1rem 0 1.5rem" }}
                />
                <p>
                  Ready to explore verified land parcels in Noida and NCR? Our
                  team is here to guide you from selection to registration.
                </p>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-phone" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+918796951483">
                    +91 8796951483, +91 9099095279{" "}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:adminmkt66@gmail.com">info@bookmyacre.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>
                    Unit No. 1018, Tower 4,
                    <br />
                    Assotech Business Cresterra
                    <br />
                    Sector 135, Noida- 201304
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fas fa-clock" />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>
                    Monday – Saturday
                    <br />
                    10:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fab fa-whatsapp" />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <a
                    href="https://wa.me/918796951483"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +91 8796951483, +91 9099095279,
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h3
                style={{
                  marginBottom: "1.5rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--text)",
                  letterSpacing: 0,
                  textTransform: "none",
                }}
              >
                Send us a message
              </h3>
              <ContactForm />

              {/* Map placeholder */}
              <div
                style={{
                  marginTop: "2rem",
                  borderTop: "1px solid #eee",
                  paddingTop: "2rem",
                }}
              >
                <h4 style={{ marginBottom: "1rem" }}>Find Us</h4>
                <iframe
                  title="BookMyAcre Location"
                  src="https://maps.google.com/maps?q=Assotech+Business+Cresterra+Sector+135+Noida&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

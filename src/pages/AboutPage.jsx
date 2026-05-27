import { Link } from "react-router-dom";
import "./InnerPage.css";
import "./FounderSection.css";

const team = [
  { name: "Priya Sharma", role: "Founder & CEO", img: "" },
  { name: "Rahul Gupta", role: "Head of Sales", img: "" },
  { name: "Neha Patel", role: "Documentation Lead", img: "" },
];

const values = [
  {
    icon: "/img/final-icons/6.png",
    title: "Transparency",
    desc: "Every transaction is clear, with zero hidden costs or surprises.",
  },
  {
    icon: "/img/final-icons/12.png",
    title: "Expertise",
    desc: "Deep local market knowledge built over a decade of focused land sales.",
  },
  {
    icon: "/img/final-icons/10.png",
    title: "Trust",
    desc: "Verified land parcels and legally clear documentation at every step.",
  },
  {
    icon: "/img/final-icons/2.png",
    title: "Client First",
    desc: "Personalized guidance tailored to your investment goals and timeline.",
  },
];

export default function AboutPage() {
  return (
    <div className="inner-page">
      {/* Hero */}
      <div
        className="page-hero"
        style={{ backgroundImage: "url(/img/bg/about.webp)" }}
      >
        <div className="container">
          <h1 className="fade-in">About Us</h1>
        </div>
      </div>

      {/* Who We Are */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <h2>
                Who We <span className="text-primary">Are</span>
              </h2>
              <div
                className="section-divider"
                style={{ margin: "1rem 0 1.5rem" }}
              />
              <p>
                Book My Acre is a Noida-based real estate company specializing
                exclusively in land and plot sales. We help individuals and
                investors discover verified land parcels across Noida and NCR
                with complete transparency and professional support.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Our mission is simple – to make land buying easy, safe, and
                stress-free. From property shortlisting to documentation and
                final purchase, our team stands with you at every step.
              </p>
              <p style={{ marginTop: "1rem" }}>
                With over a decade of dedicated experience in the NCR land
                market, we've built a reputation for trust, accuracy, and
                client-first service that consistently delivers results.
              </p>
              <Link
                to="/contact"
                className="btn btn-filled"
                style={{ marginTop: "2rem" }}
              >
                Talk to Our Team <i className="fas fa-arrow-right" />
              </Link>
            </div>
            <div>
              <img
                src="/about.png"
                alt="About BookMyAcre"
                className="about-full-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--light-bg)" }}>
        <div className="container">
          <div className="section-header">
            <h2>
              Our <span className="text-primary">Values</span>
            </h2>
            <div className="section-divider" />
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <img src={v.icon} alt={v.title} className="value-icon" />
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="section"
        style={{ background: "var(--dark)", color: "#fff" }}
      >
        <div className="container">
          <div className="stats-row">
            {[
              { n: "10+", l: "Years Experience" },
              { n: "5000+", l: "Happy Customers" },
              { n: "20+", l: "Verified Projects" },
              { n: "100%", l: "Transparency" },
            ].map((s, i) => (
              <div className="stat-item" key={i}>
                <span className="stat-num text-primary">{s.n}</span>
                <span className="stat-label">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="section founder-section">
        <div className="container">
          <div className="founder-kicker">
            <span className="founder-kicker__line" />
            <span className="founder-kicker__text">
              A Word From Our Founder
            </span>
            <span className="founder-kicker__line" />
          </div>

          <div className="founder-grid">
            <div className="founder-photo-wrap">
              <div className="founder-photo-frame">
                <img
                  src="/img/slider/team1.png"
                  alt="Founder & CEO, BookMyAcre"
                  className="founder-photo"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="founder-photo-accent" />
              </div>

              <div className="founder-id">
                <span className="founder-id__name">Founder & CEO</span>
                <span className="founder-id__company">Book My Acre</span>
                <div className="founder-id__divider" />
                <div className="founder-id__socials">
                  <a
                    href="https://in.linkedin.com/company/bookmyacreofficial"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="https://www.instagram.com/bookmyacreofficial/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>

            <div className="founder-message">
              <div className="founder-quote-mark">&ldquo;</div>

              <h2 className="founder-heading">
                Land is not just an asset —<br />
                <span className="text-primary">
                  it's a foundation for everything
                </span>
                <br />
                that comes after.
              </h2>

              <div className="founder-body">
                <p>
                  When we started Book My Acre, the NCR land market was full of
                  noise — inflated promises, murky titles, and buyers left
                  confused after signing. We built this company around one
                  belief: that every person who invests in land deserves
                  complete clarity, from the first call to the final
                  registration stamp.
                </p>
                <p>
                  We don't just sell plots. We verify them, walk you through
                  every document, and stay on the phone long after the deal is
                  done. That commitment has built us a community of over 5,000
                  satisfied investors — and it is the only standard we will ever
                  operate to.
                </p>
                <p>
                  Your trust is not something we take lightly. We earn it one
                  verified parcel at a time.
                </p>
              </div>

              <div className="founder-sign">
                <div className="founder-sign__bar" />
                <div className="founder-sign__text">
                  <span className="founder-sign__role">
                    Founder & CEO, Book My Acre
                  </span>
                </div>
              </div>

              <div className="founder-badges">
                <div className="founder-badge">
                  <i className="fas fa-shield-alt" />
                  <span>100% Verified Listings</span>
                </div>
                <div className="founder-badge">
                  <i className="fas fa-handshake" />
                  <span>5,000+ Happy Investors</span>
                </div>
                <div className="founder-badge">
                  <i className="fas fa-file-contract" />
                  <span>Zero Hidden Charges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>
            Ready to Find <span className="text-primary">Your Plot?</span>
          </h2>
          <p style={{ maxWidth: 500, margin: "1rem auto 2rem" }}>
            Our team is here to guide you through every step of your land buying
            journey.
          </p>
          <Link to="/contact" className="btn btn-filled">
            Get in Touch <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </section>
    </div>
  );
}

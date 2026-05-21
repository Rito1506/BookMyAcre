import { Link } from "react-router-dom";
import "./InnerPage.css";

const jobs = [
  {
    title: "Real Estate Sales Executive",
    type: "Full Time",
    location: "Noida",
    desc: "Drive land plot sales, build client relationships, and guide buyers through the entire purchase journey with honesty and professionalism.",
  },
  {
    title: "Documentation & Legal Assistant",
    type: "Full Time",
    location: "Noida",
    desc: "Handle title checks, Khatauni, mutation records, and support smooth registrations for clients.",
  },
  {
    title: "Digital Marketing Executive",
    type: "Full Time",
    location: "Noida / Remote",
    desc: "Manage online campaigns, social media, SEO, and lead generation for premium land projects.",
  },
  {
    title: "Site Visit Coordinator",
    type: "Full Time",
    location: "Noida NCR",
    desc: "Coordinate and facilitate guided site visits across projects, ensuring clients have an informative, smooth on-ground experience.",
  },
];

export default function CareerPage() {
  return (
    <div className="inner-page">
      <div
        className="page-hero"
        style={{
          backgroundImage: "url(/img/bg/about.jpg)",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="container">
          <h1 className="fade-in">Careers</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="career-intro">
            <h2>
              Join the <span className="text-primary">BookMyAcre</span> Team
            </h2>
            <div
              className="section-divider"
              style={{ margin: "1rem auto 1.5rem" }}
            />
            <p>
              We're building a team of passionate real estate professionals who
              believe in transparent, client-first land advisory. If you share
              our values, we'd love to hear from you.
            </p>
          </div>

          <div className="jobs-grid">
            {jobs.map((job, i) => (
              <div className="job-card" key={i}>
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span>
                    <i
                      className="fas fa-briefcase"
                      style={{ marginRight: 4 }}
                    />
                    {job.type}
                  </span>
                  <span>
                    <i
                      className="fas fa-map-marker-alt"
                      style={{ marginRight: 4 }}
                    />
                    {job.location}
                  </span>
                </div>
                <p>{job.desc}</p>
                <Link
                  to="/contact"
                  className="btn"
                  style={{ fontSize: "0.7rem", padding: "0.6rem 1.4rem" }}
                >
                  Apply Now <i className="fas fa-arrow-right" />
                </Link>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "3rem",
              padding: "2rem",
              background: "var(--light-bg)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                letterSpacing: 0,
                textTransform: "none",
                marginBottom: "0.75rem",
              }}
            >
              Don't see a role that fits?
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Send your resume directly and we'll keep you in mind for future
              openings.
            </p>
            <a href="mailto:adminmkt66@gmail.com" className="btn btn-filled">
              Email Your Resume <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

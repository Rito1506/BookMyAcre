import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg" />
      <div className="container">
        {/* CTA Row */}
        <div className="footer__cta">
          <div className="footer__cta-text">
            <p className="footer__kicker">Land-first, client-first</p>
            <h3 className="footer__heading">
              Discover verified plots with end-to-end support.
            </h3>
            <p className="footer__sub">
              Book My Acre pairs deep Noida market knowledge with transparent
              processes to secure the right parcel for you.
            </p>
          </div>
          <div className="footer__cta-actions">
            <Link to="/contact" className="btn btn-white">
              Book a consultation <i className="fas fa-arrow-right" />
            </Link>
            <a href="tel:+918796951483" className="footer__phone">
              +91 8796951483, 9099095279
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="footer__columns">
          <div className="footer__col">
            <img
              src="/bma_white_.png"
              alt="BookMyAcre"
              className="footer__logo"
            />
            <p className="footer__desc">
              Noida's dedicated land advisors, guiding you from shortlisting to
              registration with clarity and care.
            </p>
            <div className="footer__contact-info">
              <a href="mailto:adminmkt66@gmail.com">info@bookmyacre.com</a>
              <span>
                Unit No. 1018, Tower 4, Assotech Business Cresterra
                <br />
                Sector 135, Noida-201304
              </span>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Stay Connected</h4>
            <p className="footer__desc">
              Follow our latest land releases and market insights.
            </p>
            <div className="footer__contact-info">
              <a href="tel:+918796951483">+91 8796951483, +91 90990 95279</a>
              <a href="mailto:adminmkt66@gmail.com">info@bookmyacre.com</a>
            </div>
            <div className="footer__socials">
              <a
                href="https://www.instagram.com/bookmyacreofficial/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://in.linkedin.com/company/bookmyacreofficial"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="https://www.facebook.com/bookmyacreofficial/"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <span>© BookMyAcre 2026. All rights reserved.</span>
          <div className="footer__bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="footer__divider">/</span>
            <a
              href="https://rito1506.github.io/My_Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Built By BookMyAcre.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar({ isHome }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navClass = [
    "navbar",
    isHome && !scrolled ? "navbar--transparent" : "navbar--solid",
    scrolled ? "navbar--scrolled navbar--glass" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={navClass}>
      <div className="navbar__progress" style={{ width: `${progress}%` }} />
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img
            src={isHome && !scrolled ? "/bma_white_.png" : "/bma.png"}
            alt="BookMyAcre"
            className="navbar__logo-img"
          />
        </Link>

        <ul
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "navbar__link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/918796951483"
          className="navbar__phone"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-whatsapp" /> +91 8796951483
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

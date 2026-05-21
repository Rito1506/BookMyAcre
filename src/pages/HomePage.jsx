import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useInView from "../hooks/useInView";
import ContactForm from "../components/ContactForm";
import "./HomePage.css";

// ── Data ─────────────────────────────────────────────────────────────────
const slides = [
  {
    img: "/img/slider/slide3.png",
    title: "Find Premium Plots",
    subtitle:
      "Verified land investments, Clear titles, Prime locations, High returns",
    cta: { label: "Explore Now", to: "/contacts" },
  },
  {
    img: "/img/slider/slide2.png",
    title: "Premium Farmhouse Land",
    subtitle:
      "Luxury farm plots in prime location, Farmhouse plots, Gated community, High Growth",
    cta: { label: "Explore Farmhouses", to: "/contacts" },
  },
  {
    img: "/img/slider/slide1.png",
    title: "Own Your Farmhouse Plots",
    subtitle:
      "Smart investment for your future, Near jewar airport, Weekend living, Secure investment",
    cta: { label: "View Projects", to: "/projects" },
  },
];

const highlights = [
  {
    icon: "/img/final icons/6.png",
    text: "Noida’s No.1 Farmland & Plot Investment Experts Trusted guidance for premium farmland, plots, and investment properties.",
  },
  {
    icon: "/img/final icons/12.png",
    text: "Immediate Registry & Mutation Support Complete legal assistance for smooth registration and ownership transfer.",
  },
  {
    icon: "/img/final icons/10.png",
    text: "24×7 Customer Assistance Dedicated support team available anytime for investor queries and updates.",
  },
  {
    icon: "/img/final icons/14.png",
    text: "2000+ Happy & Satisfied Investors A growing community of successful investors trusting Book My Acre.",
  },
  {
    icon: "/img/final icons/2.png",
    text: "20+ Successful Projects Delivered Proven track record in farmland, plotting, and investment developments.",
  },
];

const services = [
  {
    icon: "/img/final icons/15.png",
    title: "Premium Land Consultation",
    desc: "Expert guidance for farmland, farmhouse plots & high-growth land investment across Noida, Yamuna Expressway and Dholera.",
  },
  {
    icon: "/img/final icons/1.png",
    title: "Guided Site Visits",
    desc: "Explore verified farm plots, strategic location and future ready investment corridors with expert assistance.",
  },
  {
    icon: "/img/final icons/10.png",
    title: "Secure Documentation Support",
    desc: "Clear titles, Legal verification and transparent paperwork for safe and hassle-free land investment",
  },
  {
    icon: "/img/final icons/13.png",
    title: "Smart Investment Planning",
    desc: "Data-driven insights for high appreciation farmland, plotted developments and long-term real estate growth",
  },
];

const projects = [
  {
    img: "/img/projects/3.png",
    title: "Velotech City",
    category: "Dholera IST Project",
    href: "https://velotechcity.com/",
    external: true,
  },
  {
    img: "/img/projects/1.png",
    title: "Veda Farms",
    category: "Noida",
    href: "https://www.vedafarms.in",
    external: true,
  },
  {
    img: "/img/projects/4.png",
    title: "Escon Panorama",
    category: "Greater Noida West",
  },
  { img: "/img/projects/5.png", title: "M3M Group", category: "NCR" },
  {
    img: "/img/projects/6.png",
    title: "ACE Edit",
    category: "Sector 22D, Greater Noida",
  },
  { img: "/img/projects/2.png", title: "ACE Hive", category: "Greater Noida" },
  {
    img: "/img/projects/7.png",
    title: "ACE Acreville",
    category: "Noida Expressway",
  },
  {
    img: "/img/projects/8.png",
    title: "ACE Street",
    category: "Sector 150, Noida",
  },
  {
    img: "/img/projects/neo_farms.png",
    title: "NEO Farms",
    category: "Delhi NCR",
  },
];

const achievements = [
  { target: 10, suffix: "+", label: "Years Experience in Land Sales" },
  { target: 5000, suffix: "+", label: "Happy Customers" },
  { target: 20, suffix: "+", label: "Verified Projects" },
  { target: 100, suffix: "%", label: "Transparent Transactions" },
];

const partners = [
  { src: "/ace.webp", alt: "Ace" },
  { src: "/dasnac.png", alt: "Dasnac" },
  { src: "/M3M-Logo-1.jpg", alt: "M3M" },
  { src: "/purvanchal-logo.png", alt: "Purvanchal" },
  { src: "/escon.webp", alt: "Escon" },
];

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Investor, Noida",
    text: '"The team guided us through every step of buying land in Noida. Their transparency and knowledge made the process stress-free."',
    img: "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg?w=300&q=80",
  },
  {
    name: "Neha Verma",
    role: "Home Buyer",
    text: '"Excellent site visit support and documentation assistance. I felt confident investing with their expert advice."',
    img: "https://media.istockphoto.com/id/1312051741/photo/shot-of-a-young-women-as-a-fashion-designer-stock-photo.jpg?s=612x612&w=0&k=20&c=CwNvWSSfLim0yYIBhCchWLHiOMDZ6qB7t9oIpebzKS0=",
  },
  {
    name: "Rahul Mehta",
    role: "Business Owner",
    text: '"Professional team with deep market insights. Highly recommended for anyone looking to invest in NCR."',
    img: "https://media.istockphoto.com/id/1213482808/photo/happy-coffee-shop-owner.jpg?s=612x612&w=0&k=20&c=eZLpUnI7ObfZ0yQq58shBfFvJ4xwNZ8SHB7dflt03xw=",
  },
];

const tickerItems = [
  {
    text: "New launch: NEO Farms — farm plots starting at ₹18L in Delhi NCR",
    href: "/projects",
    external: false,
  },
  {
    text: "Velotech City, Dholera IST — India's first greenfield smart city plots now open",
    href: "https://velotechcity.com/",
    external: true,
  },
  {
    text: "Veda Farms, Noida — RERA-registered weekend farm plots with clear titles",
    href: "https://www.vedafarms.in",
    external: true,
  },
  {
    text: "ACE Acreville on Noida Expressway — limited plots, site visits available this weekend",
    href: "/contact",
    external: false,
  },
  {
    text: "M3M NCR — premium commercial land parcels with flexible payment plans",
    href: "/projects",
    external: false,
  },
  {
    text: "Free land investment consultation — speak to our expert, zero obligations",
    href: "/contact",
    external: false,
  },
];

// ── Counter Hook ──────────────────────────────────────────────────────────
function useCounter(target, suffix, inView) {
  const [val, setVal] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView || done) return;
    let current = 0;
    const inc = target / 80;
    const timer = setInterval(() => {
      current = Math.min(current + inc, target);
      setVal(Math.ceil(current));
      if (current >= target) {
        setDone(true);
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [inView, target, done]);

  return done ? `${target}${suffix}` : val;
}

function AchievementBox({ target, suffix, label }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const count = useCounter(target, suffix, inView);
  return (
    <div className="achievement-box" ref={ref}>
      <h3 className="achievement-num">{count}</h3>
      <p>{label}</p>
    </div>
  );
}

// ── HomePage ──────────────────────────────────────────────────────────────
export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [slideProgress, setSlideProgress] = useState(0);
  const [testimonial, setTestimonial] = useState(0);
  const [projIndex, setProjIndex] = useState(0);
  const [projDirection, setProjDirection] = useState("next");
  const [aboutRef, aboutVisible] = useInView({ threshold: 0.2 });
  const [servicesRef, servicesVisible] = useInView({ threshold: 0.2 });
  const [projectsRef, projectsVisible] = useInView({ threshold: 0.2 });
  const [achievementsRef, achievementsVisible] = useInView({ threshold: 0.25 });
  const [testimonialsRef, testimonialsVisible] = useInView({ threshold: 0.2 });
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);
  const visible = 4;

  const visibleProjects = Array.from(
    { length: visible },
    (_, idx) => projects[(projIndex + idx) % projects.length],
  );

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartRef.current === null || touchEndRef.current === null) {
      touchStartRef.current = null;
      touchEndRef.current = null;
      return;
    }

    const diff = touchStartRef.current - touchEndRef.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextProj();
      else prevProj();
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  // Auto-advance slider with progress indicator
  useEffect(() => {
    let mounted = true;
    const tickMs = 50; // update every 50ms
    const steps = 5000 / tickMs; // for 5s slide duration
    let step = 0;
    const iv = setInterval(() => {
      if (!mounted) return;
      step += 1;
      const pct = Math.min(100, Math.round((step / steps) * 100));
      setSlideProgress(pct);
      if (pct >= 100) {
        setSlide((s) => (s + 1) % slides.length);
        step = 0;
        setSlideProgress(0);
      }
    }, tickMs);
    return () => {
      mounted = false;
      clearInterval(iv);
    };
  }, []);

  const prevProj = () => {
    setProjDirection("prev");
    setProjIndex((s) => (s - 1 + projects.length) % projects.length);
  };

  const nextProj = () => {
    setProjDirection("next");
    setProjIndex((s) => (s + 1) % projects.length);
  };

  useEffect(() => {
    const auto = setInterval(() => {
      setProjDirection("next");
      setProjIndex((idx) => (idx + 1) % projects.length);
    }, 5000);
    return () => clearInterval(auto);
  }, []);

  return (
    <div className="home">
      {/* ── Hero Slider ── */}
      <section className="hero">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero__slide ${i === slide ? "hero__slide--active" : ""}`}
          >
            <img src={s.img} alt={s.title} className="hero__bg" />
            <div className="hero__overlay" />
            <div className="hero__content container">
              <h1 className="hero__title fade-in">{s.title}</h1>
              <p className="hero__subtitle fade-in fade-in-delay-2">
                {s.subtitle}
              </p>
              <div className="hero__ticker fade-in fade-in-delay-3">
                <div className="hero__ticker-badge">
                  <i className="fas fa-bell" /> Live Updates
                </div>
                <div className="hero__ticker-track-wrap">
                  <div className="hero__ticker-track">
                    {[...tickerItems, ...tickerItems].map((item, j) => (
                      <a
                        key={j}
                        href={item.href}
                        className="hero__ticker-item"
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                      >
                        <span className="hero__ticker-dot" />
                        <span className="hero__ticker-text">{item.text}</span>
                        <i className="fas fa-arrow-right hero__ticker-arrow" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                to={s.cta.to}
                className="btn btn-white btn--ripple fade-in fade-in-delay-4"
              >
                {s.cta.label} <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        ))}

        <div className="hero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === slide ? "hero__dot--active" : ""}`}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
        <div className="hero__controls">
          <div className="hero__counter">
            {String(slide + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </div>
          <div className="hero__progress-line">
            <div
              className="hero__progress"
              style={{ width: `${slideProgress}%` }}
            />
          </div>
        </div>

        {/* floating stat badges */}
        <div className="hero__badge hero__badge--left">
          <strong>5,000+</strong>
          <span>Happy Customers</span>
        </div>
        <div className="hero__badge hero__badge--right">
          <strong>20+</strong>
          <span>Years Network</span>
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        className={`section about-section reveal-section ${aboutVisible ? "reveal-section--visible" : ""}`}
        ref={aboutRef}
      >
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>
                <span className="text-primary">About</span> Book My Acre
              </h2>
              <div
                className="section-divider"
                style={{ margin: "1rem 0 1.5rem" }}
              />
              <p style={{ fontWeight: "bold" }}>
                India’s Trusted Farmhouse Lands & Plot Investment Experts
                Connecting investors with premium farmhouse lands, farm plots &
                high-growth real estate opportunities through expertise,
                technology & trusted guidance.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Book My Acre specializes in farm land in Yamuna Expressway,
                premium farm plots near Jewar, and Noida farm house plots
                designed for investors seeking long-term growth and lifestyle
                investments.
              </p>
              <p style={{ marginTop: "1rem" }}>
                We also offer Dholera investment plots and strategically located
                projects focused on agricultural land investment and real estate
                investment in NCR. With the rapid development of infrastructure
                including Noida International Airport and industrial corridors,
                these locations are becoming prime destinations for secure land
                investment and future appreciation.
              </p>
            </div>
            <div className="about-highlights">
              <h3>
                Key Highlights<span className="text-primary">:</span>
              </h3>
              <div className="highlights-list">
                {highlights.map((h, i) => (
                  <div className="highlight-item" key={i}>
                    <img src={h.icon} alt="" className="highlight-icon" />
                    <span>{h.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-img">
              <img src="/about.png" alt="About BookMyAcre" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2>
              <span className="text-primary">What We</span> Offer
            </h2>
            <div className="section-divider" />
          </div>
          <div
            className={`services-grid reveal-section ${servicesVisible ? "reveal-section--visible" : ""}`}
            ref={servicesRef}
          >
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-card__meta">
                  <span className="service-card__index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <img src={s.icon} alt={s.title} className="service-icon" />
                </div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Carousel ── */}
      <section
        className={`section projects-section reveal-section ${projectsVisible ? "reveal-section--visible" : ""}`}
        ref={projectsRef}
      >
        <div className="container">
          <h2 className="section-title">
            Featured <span className="text-primary">Land Parcels</span>
          </h2>
          <p className="projects-sub">
            Explore premium land opportunities in prime locations across Noida
            and NCR.
          </p>
        </div>
        <div className="projects-carousel-wrap">
          <button
            className="projects-arrow projects-arrow--left"
            onClick={prevProj}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <div
            className={`projects-track projects-track--${projDirection}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visibleProjects.map((p, i) => (
              <div className="project-card" key={`${p.title}-${i}`}>
                {p.external ? (
                  <a href={p.href} target="_blank" rel="noreferrer">
                    <img src={p.img} alt={p.title} />
                    <div className="project-card__caption">
                      <h3>{p.title}</h3>
                      <p>{p.category}</p>
                    </div>
                  </a>
                ) : (
                  <div>
                    <img src={p.img} alt={p.title} />
                    <div className="project-card__caption">
                      <h3>{p.title}</h3>
                      <p>{p.category}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            className="projects-arrow projects-arrow--right"
            onClick={nextProj}
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </section>

      {/* ── Experience Banner ── */}
      <section
        className="experience-section"
        style={{ backgroundImage: "url(/img/bg/text-1.jpg)" }}
      >
        <div className="experience-overlay" />
        <div className="container experience-content">
          <div className="experience-num">20</div>
          <h4 className="experience-text">
            <span className="text-primary">Years of successful work</span>
            <br />
            in the market
          </h4>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section
        className={`section achievements-section reveal-section ${achievementsVisible ? "reveal-section--visible" : ""}`}
        ref={achievementsRef}
      >
        <div className="container">
          <div className="section-header">
            <h2>
              Our <span className="text-primary">Achievements</span>
            </h2>
            <div className="section-divider" />
          </div>
          <div className="achievements-grid">
            {achievements.map((a, i) => (
              <AchievementBox key={i} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="section partners-section">
        <div className="container">
          <div className="section-header">
            <h2>
              Our <span className="text-primary">Partners</span>
            </h2>
            <div className="section-divider" />
          </div>
          <div className="partners-list">
            {partners.map((p, i) => (
              <div className="partner-item" key={i}>
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/contact" className="btn btn--ripple">
              Work Together <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className={`section testimonials-section reveal-section ${testimonialsVisible ? "reveal-section--visible" : ""}`}
        ref={testimonialsRef}
      >
        <div className="container">
          <div className="section-header">
            <h2>
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <div className="section-divider" />
          </div>
          <div className="testimonials-wrap">
            <div className="testimonial-card">
              <div className="testimonial-quote">“</div>
              <div className="testimonial-avatar">
                <img
                  src={testimonials[testimonial].img}
                  alt={testimonials[testimonial].name}
                />
              </div>
              <p className="testimonial-text">
                {testimonials[testimonial].text}
              </p>
              <h4 className="testimonial-name">
                {testimonials[testimonial].name}
              </h4>
              <span className="testimonial-role">
                {testimonials[testimonial].role}
              </span>
            </div>
            <div className="testimonial-nav">
              <button
                onClick={() =>
                  setTestimonial(
                    (t) => (t - 1 + testimonials.length) % testimonials.length,
                  )
                }
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setTestimonial((t) => (t + 1) % testimonials.length)
                }
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="section contact-home-section">
        <div className="container">
          <div className="section-header">
            <h2>
              Ready to Own{" "}
              <span className="text-primary">
                <br />
                Your Dream Land?
              </span>
            </h2>
            <div className="section-divider" />
            <p
              style={{
                marginTop: "1.5rem",
                maxWidth: 700,
                margin: "1.5rem auto 0",
                textAlign: "justify",
              }}
            >
              Connect with our experts today to explore verified land parcels in
              Noida and NCR. We'll guide you from selection to registration.
            </p>
          </div>
          <div className="contact-home-grid">
            <div className="contact-home-info">
              <p>
                <strong>+91 8796951483</strong>
              </p>
              <p>adminmkt66@gmail.com, info@bookmyacre.com</p>
              <p>
                Unit No. 1018, Tower 4, Assotech Business Cresterra
                <br />
                Sector 135, Noida- 201304
              </p>
              <p>Monday – Saturday | 10:00 AM – 7:00 PM</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

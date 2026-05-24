import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  events,
  EVENT_TYPES,
  PLATFORM_LABELS,
  getHighlightEvents,
  getFeaturedEvent,
  socialLinks,
} from "../data/events";
import "./InnerPage.css";
import "./EventsPage.css";

const FILTER_OPTIONS = [
  { id: "all", label: "All" },
  { id: "site-visit", label: "Site Visits" },
  { id: "launch", label: "Launches" },
  { id: "expo", label: "Expos" },
  { id: "social", label: "Social" },
  { id: "milestone", label: "Milestones" },
];

const PLATFORM_ICONS = {
  instagram: "fab fa-instagram",
  youtube: "fab fa-youtube",
  linkedin: "fab fa-linkedin-in",
  facebook: "fab fa-facebook-f",
  onsite: "fas fa-map-marker-alt",
};

function shortLabel(title) {
  const words = title.split(" ");
  return words.length > 3 ? `${words.slice(0, 3).join(" ")}…` : title;
}

function StoryRing({ event }) {
  return (
    <Link to={`/events/${event.slug}`} className="event-story">
      <span className="event-story__ring">
        <img src={event.cover} alt={event.title} loading="lazy" />
      </span>
      <span className="event-story__label">{shortLabel(event.title)}</span>
    </Link>
  );
}

function EventCard({ event }) {
  return (
    <Link to={`/events/${event.slug}`} className="event-card">
      <div className="event-card__media">
        <img src={event.cover} alt={event.title} loading="lazy" />
        <span className={`event-card__type event-card__type--${event.type}`}>
          {EVENT_TYPES[event.type]}
        </span>
        <span
          className={`event-card__platform event-card__platform--${event.platform}`}
        >
          <i className={PLATFORM_ICONS[event.platform]} />{" "}
          {PLATFORM_LABELS[event.platform]}
        </span>
      </div>
      <div className="event-card__body">
        <p className="event-card__meta">
          <span>{event.dateLabel}</span>
          <span>{event.location}</span>
        </p>
        <h3 className="event-card__title">{event.title}</h3>
        <p className="event-card__excerpt">{event.excerpt}</p>
        <span className="event-card__cta">
          View gallery <i className="fas fa-arrow-right" />
        </span>
      </div>
    </Link>
  );
}

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const highlights = getHighlightEvents();
  const featured = getFeaturedEvent();

  const filteredEvents = useMemo(
    () =>
      activeFilter === "all"
        ? events
        : events.filter((e) => e.type === activeFilter),
    [activeFilter],
  );

  return (
    <div className="inner-page">
      <div
        className="page-hero"
        style={{ backgroundImage: "url(/img/bg/blog.jpg)" }}
      >
        <div className="container">
          <h1 className="fade-in">Events</h1>
        </div>
      </div>

      {featured && (
        <section className="event-featured">
          <div className="container">
            <Link to={`/events/${featured.slug}`} className="event-featured__card">
              <div className="event-featured__media">
                <img src={featured.cover} alt={featured.title} loading="lazy" />
                <span className="event-featured__badge">Featured</span>
              </div>
              <div className="event-featured__content">
                <p className="event-featured__kicker">Latest highlight</p>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <span className="event-featured__link">
                  View event <i className="fas fa-arrow-right" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="section event-stories-section">
        <div className="container">
          <div className="section-header">
            <h2>
              Latest <span className="text-primary">Highlights</span>
            </h2>
            <div className="section-divider" />
            <p className="event-stories-sub">
              Tap a story to explore photos, recaps, and updates from BookMyAcre.
            </p>
          </div>
          <div className="event-stories" role="list">
            {highlights.map((event) => (
              <StoryRing key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="section event-feed-section">
        <div className="container">
          <div className="section-header">
            <h2>
              Events & <span className="text-primary">Updates</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div
            className="events-filter"
            role="tablist"
            aria-label="Filter events by category"
          >
            {FILTER_OPTIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeFilter === id}
                className={`events-filter__btn ${activeFilter === id ? "events-filter__btn--active" : ""}`}
                onClick={() => setActiveFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>

          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <div className="events-filter-empty">
              <p>No events in this category yet. Try another filter.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section event-social-section">
        <div className="container">
          <div className="event-social">
            <div>
              <p className="event-social__kicker">Stay connected</p>
              <h3>Follow us for live updates</h3>
              <p>
                Site visits, launches, and investor stories — posted first on
                our social channels.
              </p>
            </div>
            <div className="event-social__links">
              {socialLinks.map(({ platform, label, href, icon }) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`event-social__link event-social__link--${platform}`}
                >
                  <i className={icon} /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

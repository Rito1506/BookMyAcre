import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  EVENT_TYPES,
  PLATFORM_LABELS,
  getEventBySlug,
  getRelatedEvents,
} from "../data/events";
import "./InnerPage.css";
import "./EventDetailPage.css";

const PLATFORM_ICONS = {
  instagram: "fab fa-instagram",
  youtube: "fab fa-youtube",
  linkedin: "fab fa-linkedin-in",
  facebook: "fab fa-facebook-f",
  onsite: "fas fa-map-marker-alt",
};

export default function EventDetailPage() {
  const { slug } = useParams();
  const event = getEventBySlug(slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!event) {
    return (
      <div className="inner-page inner-page--padded">
        <section className="section">
          <div className="container ed-not-found">
            <h2>Event not found</h2>
            <p>We could not locate the event you were looking for.</p>
            <Link to="/events" className="btn">
              Back to Events
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const related = getRelatedEvents(event.slug);
  const gallery = event.gallery || [];

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () => {
    setLightboxIndex((i) => (i === 0 ? gallery.length - 1 : i - 1));
  };

  const showNext = () => {
    setLightboxIndex((i) => (i === gallery.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="inner-page">
      <div
        className="page-hero ed-hero"
        style={{ backgroundImage: `url(${event.cover})` }}
      >
        <div className="container">
          <Link to="/events" className="ed-back">
            <i className="fas fa-chevron-left" /> All Events
          </Link>
          <h1 className="fade-in">{event.title}</h1>
        </div>
      </div>

      <section className="section ed-section">
        <div className="container">
          <EventDetailLayout
            event={event}
            gallery={gallery}
            related={related}
            openLightbox={openLightbox}
          />
        </div>
      </section>

      {lightboxIndex !== null && gallery[lightboxIndex] && (
        <div
          className="ed-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="ed-lightbox__close"
            aria-label="Close gallery"
            onClick={closeLightbox}
          >
            <i className="fas fa-times" />
          </button>
          <button
            type="button"
            className="ed-lightbox__nav ed-lightbox__nav--prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <figure className="ed-lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[lightboxIndex].src}
              alt={gallery[lightboxIndex].alt}
            />
            <figcaption>{gallery[lightboxIndex].alt}</figcaption>
          </figure>
          <button
            type="button"
            className="ed-lightbox__nav ed-lightbox__nav--next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      )}
    </div>
  );
}

function EventDetailLayout({ event, gallery, related, openLightbox }) {
  return (
    <div className="ed-layout">
      <article className="ed-main">
        <div className="ed-meta">
          <span>
            <i className="fas fa-calendar-alt" /> {event.dateLabel}
          </span>
          <span>
            <i className="fas fa-map-marker-alt" /> {event.location}
          </span>
          <span className={`ed-meta__type ed-meta__type--${event.type}`}>
            {EVENT_TYPES[event.type]}
          </span>
          <span className={`ed-meta__platform ed-meta__platform--${event.platform}`}>
            <i className={PLATFORM_ICONS[event.platform]} />{" "}
            {PLATFORM_LABELS[event.platform]}
          </span>
        </div>

        <p className="ed-excerpt">{event.excerpt}</p>

        <EventDetailBody event={event} />

        {gallery.length > 0 && (
          <div className="ed-gallery">
            <h3>Photo gallery</h3>
            <div className="ed-gallery__grid">
              {gallery.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className="ed-gallery__item"
                  onClick={() => openLightbox(index)}
                  aria-label={`View ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        )}

        {event.tags?.length > 0 && (
          <div className="ed-tags">
            {event.tags.map((tag) => (
              <span key={tag} className="ed-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="ed-actions">
          {event.externalUrl && (
            <a
              href={event.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              View on {PLATFORM_LABELS[event.platform]}{" "}
              <i className="fas fa-external-link-alt" />
            </a>
          )}
          <Link to="/contact" className="btn btn-filled">
            Book a site visit
          </Link>
        </div>
      </article>

      <aside className="ed-sidebar">
        {related.length > 0 && (
          <div className="ed-widget">
            <h3 className="ed-widget__title">Related events</h3>
            <div className="ed-related-list">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/events/${item.slug}`}
                  className="ed-related-item"
                >
                  <img src={item.cover} alt={item.title} loading="lazy" />
                  <RelatedItemText item={item} />
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="ed-widget ed-cta-widget">
          <p className="ed-cta-kicker">Want to visit in person?</p>
          <h4>Join our next site visit</h4>
          <p>
            Get guided walkthroughs, legal Q&A, and plot shortlisting support
            from the BookMyAcre team.
          </p>
          <Link to="/contact" className="btn btn-white">
            Register interest
          </Link>
        </div>
      </aside>
    </div>
  );
}

function EventDetailBody({ event }) {
  return (
    <div className="ed-body">
      {event.body.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

function RelatedItemText({ item }) {
  return (
    <div>
      <span className="ed-related-title">{item.title}</span>
      <span className="ed-related-date">{item.dateLabel}</span>
    </div>
  );
}

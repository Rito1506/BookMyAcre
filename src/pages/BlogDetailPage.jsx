import { Link, useParams } from "react-router-dom";
import { blogPosts, getPostBySlug } from "../data/blogPosts";
import "./BlogDetailPage.css";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="inner-page inner-page--padded">
        <section className="section">
          <div className="container" style={{ textAlign: "center" }}>
            <h2>Article not found</h2>
            <p>We could not locate the article you were looking for.</p>
            <Link to="/blog" className="btn" style={{ marginTop: "1rem" }}>
              Back to Articles
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const allTags = Array.from(new Set(blogPosts.flatMap((item) => item.tags)));
  const recentPosts = post.recentPosts
    .map((index) => blogPosts[index])
    .filter(Boolean);

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "p":
        return <p key={index}>{block.text}</p>;
      case "quote":
        return (
          <blockquote key={index} className="bd-quote">
            <span className="bd-quote-icon">
              <i className="fas fa-quote-left" />
            </span>
            {block.text}
          </blockquote>
        );
      case "gallery":
        return (
          <div key={index} className="bd-gallery">
            {block.images.map((image, idx) => (
              <img
                key={idx}
                src={image.src}
                alt={image.alt}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="inner-page">
      <div
        className="page-hero"
        style={{ backgroundImage: "url(/img/bg/blog.jpg)" }}
      >
        <div className="container">
          <h1 className="fade-in">Blog</h1>
        </div>
      </div>

      <section className="section bd-section">
        <div className="container">
          <div className="bd-layout">
            <article className="bd-post">
              <div className="bd-breadcrumb">
                <Link to="/blog">
                  <i className="fas fa-chevron-left" /> All Articles
                </Link>
              </div>
              <div className="bd-meta">
                <span>
                  <i className="fas fa-calendar-alt" /> {post.date}
                </span>
                <span>
                  <i className="fas fa-user" /> {post.author}
                </span>
              </div>
              <h2 className="bd-title">{post.title}</h2>
              <figure className="bd-hero">
                <img
                  src={post.img}
                  alt={post.title}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <figcaption>{post.excerpt}</figcaption>
              </figure>
              <div className="bd-body">{post.body.map(renderBlock)}</div>
              <div className="bd-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="bd-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="bd-footer-nav">
                <Link to="/blog" className="btn">
                  <i className="fas fa-chevron-left" /> Back to Articles
                </Link>
              </div>
            </article>

            <aside className="bd-sidebar">
              <div className="bd-widget">
                <h3 className="bd-widget-title">Recent Posts</h3>
                <div className="bd-recent-list">
                  {recentPosts.map((recent) => (
                    <Link
                      key={recent.slug}
                      to={`/blog/${recent.slug}`}
                      className="bd-recent-item"
                    >
                      <div className="bd-recent-thumb">
                        <img
                          src={recent.img}
                          alt={recent.title}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                      <div>
                        <div className="bd-recent-title">{recent.title}</div>
                        <div className="bd-recent-date">{recent.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bd-widget">
                <h3 className="bd-widget-title">Topics</h3>
                <div className="bd-tags">
                  {allTags.map((tag) => (
                    <span key={tag} className="bd-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bd-widget bd-cta-widget">
                <div className="bd-cta-label">Ready to invest?</div>
                <div className="bd-cta-heading">Talk to a Land Expert</div>
                <p className="bd-cta-text">
                  Get tailored advice for your Noida land purchase and avoid the
                  common registration pitfalls.
                </p>
                <Link to="/contact" className="btn btn-white">
                  Book a Consultation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

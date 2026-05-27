import { Link } from "react-router-dom";
import "./InnerPage.css";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  return (
    <div className="inner-page">
      <div
        className="page-hero"
        style={{ backgroundImage: "url(/img/bg/blog.webp)" }}
      >
        <div className="container">
          <h1 className="fade-in">Blog</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>
              Latest <span className="text-primary">Insights</span>
            </h2>
            <div className="section-divider" />
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div className="blog-card" key={post.slug}>
                <img
                  src={post.img}
                  alt={post.title}
                  className="blog-card-img"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-card-link">
                    Read More <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

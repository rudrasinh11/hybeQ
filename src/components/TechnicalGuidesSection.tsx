import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Clock, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';

export const TechnicalGuidesSection: React.FC = () => {
  const leadPost = BLOG_POSTS[0];
  const supportingPosts = BLOG_POSTS.slice(1, 3);

  return (
    <section className="hybeq-guides-section" id="technical-guides" aria-label="Technical Guides and Engineering Blog">
      <div className="hybeq-guides-container">
        
        {/* Section Header: Bildora Editorial Reference */}
        <div className="hybeq-guides-header">
          <div className="hybeq-guides-header-left">
            <div className="hybeq-section-badge">
              <BookOpen size={14} />
              <span>TECHNICAL KNOWLEDGE BASE</span>
            </div>
            <h2 className="hybeq-guides-title">
              Knowledge That Builds Confidence
            </h2>
            <p className="hybeq-guides-subtitle">
              Substrate preparation manuals, Indian standard codes (IS 15477 / EN 12004), and failure prevention analyses authored by HYBEQ civil chemical engineers.
            </p>
          </div>

          <div className="hybeq-guides-header-right">
            <Link to="/blog" className="hybeq-btn hybeq-btn-secondary">
              <span>View All Articles</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bildora Editorial Layout: Featured Lead Story + Supporting Grid */}
        <div className="hybeq-editorial-layout">
          
          {/* Prominent Lead Article */}
          {leadPost && (
            <article className="hybeq-lead-article">
              <div className="hybeq-lead-media">
                <Link to={`/blog/${leadPost.slug}`} tabIndex={-1} aria-hidden="true">
                  <img
                    src="/images/hero-waterproofing.jpg"
                    alt={leadPost.title}
                    className="hybeq-lead-img"
                    loading="lazy"
                  />
                  <div className="hybeq-lead-img-overlay" />
                </Link>
                <div className="hybeq-lead-badge-float">
                  <span>FEATURED TECHNICAL GUIDE</span>
                </div>
              </div>

              <div className="hybeq-lead-content">
                <div className="hybeq-article-meta-row">
                  <span className="hybeq-meta-pill">{leadPost.category}</span>
                  <span className="hybeq-meta-time">
                    <Clock size={13} />
                    <span>{leadPost.readTime}</span>
                  </span>
                  <span className="hybeq-meta-date">
                    <Calendar size={13} />
                    <span>{leadPost.date}</span>
                  </span>
                </div>

                <h3 className="hybeq-lead-title">
                  <Link to={`/blog/${leadPost.slug}`}>
                    {leadPost.title}
                  </Link>
                </h3>

                <p className="hybeq-lead-summary">
                  {leadPost.summary}
                </p>

                {/* Key Engineering Takeaways */}
                {leadPost.keyTakeaways && leadPost.keyTakeaways.length > 0 && (
                  <div className="hybeq-lead-takeaways">
                    <strong className="hybeq-takeaways-heading">Key Field Takeaways:</strong>
                    <ul className="hybeq-takeaways-list">
                      {leadPost.keyTakeaways.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="hybeq-takeaway-item">
                          <CheckCircle2 size={14} className="hybeq-takeaway-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="hybeq-lead-footer">
                  <div className="hybeq-author-tag">
                    <span className="hybeq-author-by">By</span>
                    <strong className="hybeq-author-name">{leadPost.author}</strong>
                  </div>

                  <Link to={`/blog/${leadPost.slug}`} className="hybeq-btn hybeq-btn-primary">
                    <span>Read Complete Guide</span>
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Supporting Articles Grid */}
          <div className="hybeq-supporting-grid">
            {supportingPosts.map((post, index) => {
              const postThumb = index === 0
                ? '/images/lab-testing-rig.jpg'
                : '/images/hero-facade.jpg';

              return (
                <article key={post.id} className="hybeq-supporting-card">
                  <Link to={`/blog/${post.slug}`} className="hybeq-supporting-media">
                    <img
                      src={postThumb}
                      alt={post.title}
                      className="hybeq-supporting-img"
                      loading="lazy"
                    />
                    <div className="hybeq-supporting-overlay" />
                    <span className="hybeq-supporting-cat">{post.category}</span>
                  </Link>

                  <div className="hybeq-supporting-content">
                    <div className="hybeq-article-meta-row">
                      <span className="hybeq-meta-time">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </span>
                      <span className="hybeq-meta-date">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </span>
                    </div>

                    <h4 className="hybeq-supporting-title">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h4>

                    <p className="hybeq-supporting-snippet">
                      {post.summary}
                    </p>

                    <div className="hybeq-supporting-footer">
                      <span className="hybeq-author-sub">{post.author}</span>
                      <Link to={`/blog/${post.slug}`} className="hybeq-read-link">
                        <span>Read Article</span>
                        <ChevronRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

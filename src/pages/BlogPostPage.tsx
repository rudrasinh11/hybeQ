import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { PRODUCTS } from '../data/productsData';

interface BlogPostPageProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

  const relatedProductsList = PRODUCTS.filter(p => post.relatedProducts.includes(p.id));

  return (
    <div className="blog-post-page">
      {/* Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '60px 0 50px' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', color: '#46C985', fontWeight: 700, marginBottom: 20 }}>
            <ArrowLeft size={16} /> Back to All Articles
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, background: '#46C985', color: '#0A2362', padding: '4px 12px', borderRadius: 20, textTransform: 'uppercase' }}>
              {post.category}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)' }}>
              <Clock size={14} /> {post.readTime}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8125rem', color: 'rgba(255,255,255,0.7)' }}>
              <Calendar size={14} /> {post.date}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#FFFFFF', fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9375rem', color: 'rgba(255,255,255,0.9)', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <User size={16} style={{ color: '#46C985' }} />
            <span>Authored by <strong>{post.author}</strong></span>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section style={{ padding: '70px 0 90px', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          {/* Executive Summary */}
          <div style={{ background: '#F5F7FB', borderLeft: '4px solid #46C985', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 40 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0A2362', textTransform: 'uppercase', letterSpacing: 1.5, display: 'block', marginBottom: 6 }}>
              Executive Technical Summary
            </span>
            <p style={{ fontSize: '1.05rem', color: '#26344E', lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
              "{post.summary}"
            </p>
          </div>

          {/* Article Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontSize: '1.05rem', color: '#26344E', lineHeight: 1.8, marginBottom: 48 }}>
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Engineering Takeaways Box */}
          <div style={{
            background: 'linear-gradient(135deg, #0A2362 0%, #071A45 100%)',
            borderRadius: 16,
            padding: 36,
            color: '#FFFFFF',
            marginBottom: 56
          }}>
            <h3 style={{ fontSize: '1.35rem', color: '#46C985', fontWeight: 800, marginBottom: 20 }}>
              Key Engineering Takeaways &amp; Site Best Practices
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {post.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle2 size={20} style={{ color: '#46C985', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Formulations for this Application */}
          {relatedProductsList.length > 0 && (
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#0A2362', fontWeight: 900, marginBottom: 20 }}>
                Recommended Hybeq Formulations for this Application
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                {relatedProductsList.map(p => (
                  <div key={p.id} style={{ background: '#F5F7FB', border: '1.5px solid #DFE6EF', borderRadius: 12, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#0A2362', textTransform: 'uppercase', letterSpacing: 0.5 }}>{p.badge}</span>
                      <h4 style={{ fontSize: '1.15rem', color: '#0A2362', fontWeight: 800, margin: '4px 0 8px' }}>{p.name}</h4>
                      <p style={{ fontSize: '0.8125rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>{p.shortDesc}</p>
                    </div>

                    <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
                      <Link to={`/products/${p.category}/${p.id}`} className="btn btn-outline" style={{ flex: 1, padding: '8px', fontSize: '0.75rem', justifyContent: 'center' }}>
                        Specs
                      </Link>
                      <button type="button" className="btn btn-primary" onClick={() => onOpenEnquiry(p.name)} style={{ padding: '8px 12px', fontSize: '0.75rem' }}>
                        Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

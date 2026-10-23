import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight, Search } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'Waterproofing Guide', 'Structural Engineering', 'Tile Fixing Masterclass'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCat = selectedCategory === 'all' || post.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || post.title.toLowerCase().includes(q) || post.summary.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="blog-page">
      {/* Header */}
      <section style={{ background: '#0A2362', color: '#FFFFFF', padding: '70px 0 50px' }}>
        <div className="container">
          <span className="section-tag on-dark" style={{ marginBottom: 12 }}>Inside Story</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', color: '#FFFFFF', fontWeight: 900, marginBottom: 16 }}>
            Technical Insights &amp; Engineering Articles
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: 740, lineHeight: 1.6 }}>
            Authoritative guides authored by Hybeq application engineers covering hydrostatic monsoon defense, large format tile shear stresses, and substrate preparation protocols.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ background: '#F5F7FB', padding: '28px 0', borderBottom: '1px solid #DFE6EF' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 20,
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: selectedCategory === cat ? '#0A2362' : '#FFFFFF',
                    color: selectedCategory === cat ? '#FFFFFF' : '#0A2362',
                    border: '1.5px solid #DFE6EF'
                  }}
                >
                  {cat === 'all' ? 'All Guides' : cat}
                </button>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#FFFFFF',
              border: '1.5px solid #DFE6EF',
              borderRadius: 10,
              padding: '6px 14px',
              minWidth: 260
            }}>
              <Search size={16} style={{ color: '#0A2362', marginRight: 8 }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ border: 'none', outline: 'none', fontSize: '0.875rem', fontWeight: 600, color: '#0A2362', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section style={{ padding: '70px 0 90px', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 36 }}>
            {filteredPosts.map(post => (
              <article
                key={post.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 16,
                  border: '1.5px solid #DFE6EF',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#46C985';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(10,35,98,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#DFE6EF';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ padding: 32 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#46C985', background: '#EAF8F0', padding: '4px 10px', borderRadius: 4, textTransform: 'uppercase' }}>
                      {post.category}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: '#64748B' }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#0A2362', fontWeight: 800, lineHeight: 1.35, marginBottom: 14 }}>
                    <Link to={`/blog/${post.slug}`} style={{ color: '#0A2362' }}>
                      {post.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, marginBottom: 20 }}>
                    {post.summary}
                  </p>
                </div>

                <div style={{ padding: '16px 32px', background: '#F5F7FB', borderTop: '1px solid #DFE6EF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8125rem', color: '#64748B' }}>
                    <User size={14} style={{ color: '#0A2362' }} />
                    <span>{post.author}</span>
                  </div>

                  <Link to={`/blog/${post.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.8125rem', color: '#0A2362', fontWeight: 800 }}>
                    Read Guide <ArrowRight size={14} style={{ color: '#46C985' }} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

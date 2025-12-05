import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../article-content';

function HomePage() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Frontend studio</p>
          <h1>Polished UI patterns without the corporate beige.</h1>
          <p className="lead">
            Practical frontend patterns, short walkthroughs, and reusable snippets — from
            integrations and APIs to accessibility and small-app extensibility. Learn by
            example and apply the same patterns to your React projects.
          </p>
          <div className="hero-actions">
            <Link to="/articles" className="button-link primary">
              Browse articles
            </Link>
            <Link to="/about" className="button-link secondary">
              About the team
            </Link>
          </div>
          <div className="stats">
            <div className="stat">
              <strong>{articles.length}+</strong>
              <span>React breakdowns</span>
            </div>
            <div className="stat">
              <strong>3</strong>
              <span>UI micro-guides</span>
            </div>
            <div className="stat">
              <strong>Zero</strong>
              <span>fluff allowed</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Design desk with colorful UI elements"
            />
            <p className="muted">
              Examples cover connecting to headless CMSs, syncing drafts, improving keyboard
              navigation and focus states, and adding markdown-driven content without heavy
              rewrites.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Highlights</p>
            <h2>What you get inside.</h2>
          </div>
          <span className="muted">Clean patterns, real-world snippets.</span>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">API</div>
            <h3>Integrations &amp; APIs</h3>
            <p>
              Practical guidance for connecting Taglay to headless CMSs, syncing drafts, and
              embedding third-party widgets while keeping the UI components reusable.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">A11Y</div>
            <h3>Accessibility basics</h3>
            <p>
              Small, actionable tips—semantic headings, keyboard-friendly navigation, visible
              focus states and recommended tools (like axe-core) to catch common issues.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">EXT</div>
            <h3>Extending Taglay</h3>
            <p>
              How to add markdown support, persist drafts to localStorage, and add search—patterns
              that map cleanly onto the project's file structure.
            </p>
          </div>
        </div>
      </section>

      <section className="articles-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Articles</p>
            <h2>Latest reads.</h2>
          </div>
          <Link to="/articles" className="button-link secondary">
            View all
          </Link>
        </div>
        <div className="article-preview-grid">
          {featuredArticles.map((article) => (
            <div key={article.name} className="article-preview">
              <div className="article-meta">
                <span className="pill">React</span>
                <span className="muted">{article.content[0].substring(0, 30)}...</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.content[0].substring(0, 150)}...</p>
              <Link to={`/articles/${article.name}`} className="button-link secondary">
                Read article
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;

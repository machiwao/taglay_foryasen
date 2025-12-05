import React from 'react';
import { Link, useParams } from 'react-router-dom';
import articles from '../article-content.js';
import NotFoundPage from './NotFoundPage';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((item) => item.name === name);

  if (!article) {
    return <NotFoundPage />;
  }

  const words = article.content.join(' ').split(' ').length;
  const minutes = Math.max(2, Math.ceil(words / 70));

  return (
    <div className="page article-page">
      <div className="page-header">
        <p className="eyebrow">Article</p>
        <h1>{article.title}</h1>
        <div className="article-meta">
          <span className="pill">React</span>
          <span className="muted">{minutes} min read</span>
        </div>
        <p className="lead">
          A curated library of short, hands-on guides: layout recipes, integration examples, and
          accessibility tips you can reuse directly in your React projects.
        </p>
      </div>

      <div className="article-body">
        {article.content.map((paragraph, idx) => (
          <p key={`${article.name}-${idx}`}>{paragraph}</p>
        ))}
        <div className="card callout">
          <h3>Want another angle?</h3>
          <p>
            Browse articles on connecting to headless CMSs, improving keyboard navigation and focus
          states, or extending the demo with markdown and local draft persistence.
          </p>
          <Link to="/articles" className="button-link primary">
            Browse more articles
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;

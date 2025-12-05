import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import articles from '../article-content';

function ArticleListPage() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setArticleList(articles);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="page">
        <p className="muted">Loading articles...</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">Library</p>
        <h1>Articles crafted for UI-minded developers.</h1>
        <p className="lead">
          A curated library of short, hands-on guides: layout recipes, integration examples, and
          accessibility tips you can reuse directly in your React projects.
        </p>
      </div>

      {articleList.length > 0 ? (
        <ArticleList articles={articleList} />
      ) : (
        <p className="muted">No articles available right now.</p>
      )}

      <div className="cta-banner">
        <h3>Looking for more?</h3>
        <p>
          Browse articles on connecting to headless CMSs, improving keyboard navigation and focus
          states, or extending the demo with markdown and local draft persistence.
        </p>
        <Link to="/about" className="button-link secondary">
          Meet the crew
        </Link>
      </div>
    </div>
  );
}

export default ArticleListPage;

import React, { useState, useEffect } from 'react';
import './News.css';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchedArticles = [
      { id: 1, title: 'New Phone Release', content: 'Details about the new phone release.' },
      { id: 2, title: 'Tech Trends 2023', content: 'Upcoming trends in mobile technology.' },
      { id: 3, title: 'Review: Phone X', content: 'In-depth review of Phone X.' },
    ];
    setArticles(fetchedArticles);
  }, []);

  return (
    <div className="news-container">
      <h1>Latest News</h1>
      <ul className="news-list">
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News; 
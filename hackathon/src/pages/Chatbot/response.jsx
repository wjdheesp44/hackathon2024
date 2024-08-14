import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './News.css';

const DraggableNewsBox = ({ article }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const boxRef = useRef(null);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - boxRef.current.getBoundingClientRect().left,
      y: e.clientY - boxRef.current.getBoundingClientRect().top
    });
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;

    const box = boxRef.current;
    box.style.position = 'absolute';
    box.style.left = `${e.clientX - offset.x}px`;
    box.style.top = `${e.clientY - offset.y}px`;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="news-box"
      ref={boxRef}
      onMouseDown={onMouseDown}
    >
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-title">
        {article.title}
      </a>
      <p className="news-description">{article.description}</p>
    </div>
  );
};

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'kr',
            apiKey: '9accff731dbb4095abefd19ea15ffdb5', // 여기 API 키를 넣으세요
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching the news", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <DraggableNewsBox key={index} article={article} />
      ))}
    </div>
  );
};

export default News;

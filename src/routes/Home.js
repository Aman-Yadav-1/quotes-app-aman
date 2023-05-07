import React from 'react';
import '../components/Home.css';
import quotes from '../components/api/quotes.json';
import { Routes, Route, Link } from 'react-router-dom';
import QuoteInfo from '../components/quoteInfo';

const Quote = ({ id, text, author }) => (
  <div className='container-items'>
    <span className="quote-card-main" style={{ "--count": id }}>
      <Link to={`/quoteInfo/${id}`} style={{ textDecoration: 'none', width: '100%' }} target="_blank">
        <blockquote className="notfull svelte-93h3yx">
          <p className="quote-text trunctate" style={{ marginTop: '10px', padding: '50px', borderRadius: '10px' }}>
            {text}
          </p>
          <p className="quote-author" style={{ textAlign: 'right', fontStyle: 'italic', marginTop: '5px' }}>
            - {author}
          </p>
        </blockquote>
      </Link>
    </span>
  </div>
);

const App = () => (
  <div className="container">
    <Routes>
      <Route path="*" element={<div>
        {quotes.quotes.map(({ id, text, author }) => (
          <Quote key={id} id={id} text={text} author={author} />
        ))}
      </div>} />
      <Route path="/quoteInfo/:id" element={<QuoteInfo />} />
    </Routes>
  </div>
);

export default App;

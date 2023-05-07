import React from 'react';
import { useParams, Route } from 'react-router-dom';
import quotesData from './api/quotes.json';

function QuoteInfo() {
  const { id } = useParams();
  const quote = quotesData.quotes.find(q => q.id === parseInt(id));
  
  if (!quote) {
    return <div>Quote not found</div>;
  }
  
  return (
    <div className="quote-info">
      <div className="quote-text">{quote.text}</div>
      <div className="quote-author">- {quote.author}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Your other routes */}
      <Route path="/quoteInfo/:id" component={QuoteInfo} />
    </div>
  );
}
export default App;
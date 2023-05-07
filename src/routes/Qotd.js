import React, { useEffect, useState } from 'react';
import '../components/qotd.css';

function QuoteOfTheDay() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/qotd')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setQuote(data.quote);
      })
      .catch(error => {
        console.error('There was a problem fetching the quote:', error);
      });
  }, []);
  

  return (
    <div className="quote-of-the-day-container">
      <h1>Quote of the Day</h1>
      <p className="quote">{quote}</p>
      <button className="quote-button" onClick={() => window.location.reload()}>
        Get another quote
      </button>
    </div>
  );
}

export default QuoteOfTheDay;

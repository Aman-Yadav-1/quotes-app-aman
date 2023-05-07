import React from 'react';
import quotesData from '../components/api/quotes.json';
import "../components/Gallery.css";

const quotes = Array.isArray(quotesData.quotes) ? quotesData.quotes : [];

function Gallery() {
  return (
    <div className="wrapper svelte-izfvso" style={{'--count_g': quotes.length}}>
      <div className="wrapper__container svelte-izfvso">
        {quotes.map(quote => (
          <a href={`/quote/${quote.id}`} style={{'--font-size': '40px'}} className="svelte-izfvso" key={quote.id}>
            {quote.text}
            <span className="author">{quote.author}</span>
          </a>
        ))}
      </div>
    </div>
  );
}


export default Gallery;

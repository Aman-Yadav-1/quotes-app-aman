import React from 'react';
import '../components/Home.css';

const quotes = [
  {
    id: 1,
    text: "I make the decisions to give us the best chance to win!",
    author: "Heq"
  },
  {
    id: 2,
    text: "If you think this has a happy ending you obviously haven’t been paying attention!",
    author: "PRINCE"
  },
  {
    id: 3,
    text: "Love’s strong passion is impressed in youth",
    author: "Charles Dickens"
  },
  {
    id: 4,
    text: "Man is enemy to Virginity",
    author: "William Shakespeare"
  },
  {
    id: 5,
    text: "When your opinion’s wanted, you give it, when you’re spoke to, you speak",
    author: "Candace Owens"
  },
  {
    id: 6,
    text: "Fathers should never kiss their daughters when young men are by, it's too much!",
    author: "Heq"
  },
  {
    id: 7,
    text: "'Roving stones’ gather no moss",
    author: "Jaquar Wright"
  },
  {
    id: 8,
    text: "Don’t let someone’s negativity become your reality!",
    author: "Russell Brand"
  },
  {
    id: 9,
    text: "If you are still explaining your probably losing!",
    author: "Jordan B Peterson"
  },
  {
    id: 10,
    text: "Virginity by being once lost may be ten times found; by being ever kept it is ever lost",
    author: "Heq"
  },
  {
    id: 11,
    text: "It’s not just about living, it’s about living rightly",
    author: "PRINCE"
  },
  {
    id: 12,
    text: "He’ll never be more in love, and maybe he’ll never be less in love, but he’ll never be in love like this again.",
    author: "Heq"
  },
  {
    id: 13,
    text: "If your explaining your probably losing",
    author: "Russell Brand"
  },
  {
    id: 14,
    text: "If you think this has a happy ending you haven’t been paying attention!",
    author: "Heq"
  },
  {
    id: 15,
    text: "I am not built for this type of Downtime",
    author: "Jordan B Peterson"
  },
  {
    id: 16,
    text: "You want points for cleaning up a mess that you created?",
    author: "Heq"
  },
  {
    id: 17,
    text: "How it feels to be clown of my story?",
    author: "PRINCE"
  },
  {
    id: 18,
    text: "I make the decisions to give us the best chance to win!",
    author: "Heq"
  },
  {
    id: 19,
    text: "When your opinion’s wanted, you give it, when you’re spoke to, you speak",
    author: "THORS"
  },
  {
    id: 20,
    text: "Don’t let someone’s negativity become your reality!",
    author: "Heq"
  }
];

  
  
const Quote = ({ text, author }) => (
  <div className='container-items'>
    <span className="quote-card-main" style={{ "--count": 65 }}>
      <a style={{ textDecoration: 'none', width: '100%' }} href="/">
        <blockquote className="notfull svelte-93h3yx">
          <p className="quote-text trunctate" style={{ marginTop: '10px', padding: '50px', borderRadius: '10px' }}>
            {text}
          </p>
          <p className="quote-author" style={{ textAlign: 'right', fontStyle: 'italic', marginTop: '5px' }}>
            - {author}
          </p>
        </blockquote>
      </a>
    </span>
  </div>
);


const App = () => (
  <div className="container">
    {quotes.map(({ id, text, author }) => (
      <Quote key={id} text={text} author={author} />
    ))}
  </div>
);


export default App;

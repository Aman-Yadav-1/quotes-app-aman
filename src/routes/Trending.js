import React from 'react';
import '../components/Trending.css';

const quotes = [
  {
    id: 1,
    text: "I make the decisions to give us the best chance to win!",
    votes: 20
  },
  {
    id: 2,
    text: "If you think this has a happy ending you obviously haven’t been paying attention!",
    votes: 15
  },
  {
    id: 3,
    text: "Love’s strong passion is impressed in youth",
    votes: 13
  },
  {
    id: 4,
    text: "Man is enemy to Virginity",
    votes: 12
  },
  {
    id: 5,
    text: "When your opinion’s wanted, you give it, when you’re spoke to, you speak",
    votes: 10
  },
  {
    id: 6,
    text: "Fathers should never kiss their daughters when young men are by, it's too much!",
    votes: 8
  },
  {
    id: 7,
    text: "'Roving stones’ gather no moss",
    votes: 7
  },
  {
    id: 8,
    text: "Don’t let someone’s negativity become your reality!",
    votes: 5
  },
  {
    id: 9,
    text: "If you are still explaining your probably losing!",
    votes: 3
  },
  {
    id: 10,
    text: "Virginity by being once lost may be ten times found; by being ever kept it is ever lost",
    votes: 2
  }
];

const Quote = ({ text, rank }) => (
  <div className='container-items'>
  <span className="quote-card-main" style={{ "--count": 65 }}>
    <a style={{ textDecoration: 'none', width: '100%' }} href="/">
      <blockquote className="notfull svelte-93h3yx">
        <p className="quote-rank" style={{ color: '#16faf385', position: 'relative', left: '40px',top:'2px' }}>{rank}</p>
        <p className="quote-text trunctate" style={{ marginTop: '10px', padding: '20px', borderRadius: '10px' }}>
          {text}
        </p>
      </blockquote>
    </a>
  </span>
  </div>
);

const App = () => (
  <div className="container-r">
    {quotes
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 10)
      .map(({ id, text }, index) => (
        <Quote key={id} text={text} rank={index + 1} />
    ))}
  </div>
);

export default App;

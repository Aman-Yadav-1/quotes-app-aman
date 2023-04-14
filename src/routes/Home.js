import React from 'react';
import '../components/Home.css';

const quotes = [
  {
    id: 1,
    text: "I make the decisions to give us the best chance to win!"
  },
  {
    id: 2,
    text: "If you think this has a happy ending you obviously haven’t been paying attention!"
  },
  {
    id: 3,
    text: "Love’s strong passion is impressed in youth"
  },
  {
    id: 4,
    text: "Man is enemy to Virginity"
  },
  {
    id: 5,
    text: "When your opinion’s wanted, you give it, when you’re spoke to, you speak"
  },
  {
    id: 6,
    text: "Fathers should never kiss their daughters when young men are by, it's too much!"
  },
  {
    id: 7,
    text: "'Roving stones’ gather no moss"
  },
  {
    id: 8,
    text: "Don’t let someone’s negativity become your reality!"
  },
  {
    id: 9,
    text: "If you are still explaining your probably losing!"
  },
  {
    id: 10,
    text: "Virginity by being once lost may be ten times found; by being ever kept it is ever lost"
  },
  {
    id: 11,
    text: "It’s not just about living, it’s about living rightly"
  },
  {
    id: 12,
    text: "He’ll never be more in love, and maybe he’ll never be less in love, but he’ll never be in love like this again."
  },
  {
    id: 13,
    text: "If your explaining your probably losing"
  },
  {
    id: 14,
    text: "If you think this has a happy ending you haven’t been paying attention!"
  },
  {
    id: 15,
    text: "I am not built for this type of Downtime"
  },
  {
    id: 16,
    text: "You want points for cleaning up a mess that you created?"
  },
  {
    id: 17,
    text: "How it feels to be clown of my story?"
  },
  {
    id: 18,
    text: "I make the decisions to give us the best chance to win!"
  },
  {
    id: 19,
    text: "When your opinion’s wanted, you give it, when you’re spoke to, you speak"
  },
  {
    id: 20,
    text: "Don’t let someone’s negativity become your reality!"
  }
];

  
  
const Quote = ({ text }) => (
  <div className='container-items'>
    <span className="quote-card-main" style={{ "--count": 65 }}>
      <a style={{ textDecoration: 'none', width: '100%' }} href="/">
        <blockquote className="notfull svelte-93h3yx">
          <p className="quote-text trunctate" style={{ marginTop: '10px', padding: '50px', borderRadius: '10px' }}>
            {text}
          </p>
        </blockquote>
      </a>
    </span>
  </div>
);

const App = () => (
    <div className="container">
        {quotes.map(({ id, text }) => (
            <Quote key={id} text={text} />
        ))}</div>
);


export default App;
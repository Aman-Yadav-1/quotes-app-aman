import React from 'react';
import '../components/Trending.css';

const quotes = [  {    id: 1,    text: "How it feels to be the clown of my story?",    author: "Isagi Yoichi",    views: 25,    votes: 20  },  {    id: 2,    text: "What possibly can be better, Than being better?",    author: "Aman",    views: 22,    votes: 15  },  {    id: 3,    text: "You have no enemies, no one has them, there is no one who it's okay to hurt.",    author: "Thors",    views: 21,    votes: 13  },  {    id: 4,    text: "Show no love, love will get you killed!",    author: "Unknown: Rule 5",    views: 19,    votes: 12  },  {    id: 5,    text: "A fight you cannot win becomes an obsession!",    author: "Askeladd",    views: 17,    votes: 10  },  {    id: 6,    text: "You must understand how infinite you are!",    author: "Miyamoto Musashi",    views: 14,    votes: 8  },  {    id: 7,    text: "If you're always worried about crushing the ants beneath you... you won't be able to walk.",    author: "Berserk : Guts",    views: 12,    votes: 7  },  {    id: 8,    text: "In all things, have no preferences!",    author: "Musashi Miyamoto",    views: 9,    votes: 5  },  {    id: 9,    text: "If you are still explaining your probably losing!",    author: "B. J. Gupta",    views: 5,    votes: 3  },  {    id: 10,    text: "The more work I do, more I understand how big my dreams are, I want it all.",    author: "Aman",    views: 1,    votes: 2  }];

const Quote = ({ text, author, views, rank }) => (
  <div className='container-items'>
    <span className="quote-card-main" style={{ "--count": views }}>
      <a style={{ textDecoration: 'none', width: '100%' }} href="/">
        <blockquote className="notfull svelte-93h3yx">
          <p className="quote-rank" style={{ color: '#16faf385', position: 'absolute', left: '0px', bottom: '0px' }}>{rank}</p>
          <p className="quote-author" style={{ color: '#7a7a7a', position: 'absolute', right: '0px', bottom: '0px', fontSize: '14px', margin: '0 10px 0 0' }}>{author}</p>
          <p className="quote-views" style={{ color: '#7a7a7a', position: 'absolute', bottom: '0px', textAlign: 'center', width: '100%', fontSize: '14px' }}>{views} views</p>
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
      .map(({ id, text, author, views }, index) => (
        <Quote key={id} text={text} rank={index + 1} author={author} views={views} />
      ))}
  </div>
);
export default App;
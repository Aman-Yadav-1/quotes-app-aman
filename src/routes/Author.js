import React, { useState, useEffect } from 'react';
import '../components/Author.css';
import data from '../components/api/authors.json';

const AuthorBox = ({ name, photo, description, quotes }) => {
  return (
    <div className='box-new'>
      <div className='author' style={{border: '1px solid black', padding: '10px'}}>
        <img src={photo} alt={name} style={{width: '100px', height: '100px', borderRadius: '50%', display: 'block', margin: '0 auto'}} className='image'/>
        <h2 className='author__name' style={{textAlign: 'center'}}>{name}</h2>
        <p className='author__description'>{description}</p>
        <h3>Quotes:</h3>
        <ul className='author__quotes'>
          {quotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Author = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    setAuthors(data.authors);
  }, []);

  return (
    <div>
      <div className="author-list">
        {authors.map(author => (
          <span
            key={author.name}
            className="author-list-item"
            onClick={() => setSelectedAuthor(author)}
          >
            {author.name}
          </span>
        ))}
      </div>
      {selectedAuthor && <AuthorBox {...selectedAuthor} />}
    </div>
  );
}

export default Author;

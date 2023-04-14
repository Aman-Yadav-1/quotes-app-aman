import React from 'react';
import '../components/Author.css';

const AuthorBox = ({ name, photo, description }) => {
    return (
        <div className='box-new'>
      <div className='author' style={{border: '1px solid black', padding: '10px'}}>
        <img src={photo} alt={name} style={{width: '100px', height: '100px', borderRadius: '50%', display: 'block', margin: '0 auto'}} className='image'/>
        <h2 className='author__name' style={{textAlign: 'center'}}>{name}</h2>
        <p className='author__description'>{description}</p>
      </div></div>
    );
  };
const Author = () => {
  const authors = [
    {
      name: 'Jane Smith',
      photo: 'https://via.placeholder.com/150',
      description: 'Jane is a writer and blogger with a passion for travel.'
    }
  ];

  return (
    <div>
      {authors.map(author => (
        <AuthorBox
          key={author.name}
          name={author.name}
          photo={author.photo}
          description={author.description}
        />
      ))}
    </div>
  );
};

export default Author;

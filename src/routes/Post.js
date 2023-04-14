import React, { useState } from 'react';
import "../components/Post.css";

function QuoteForm() {
  const [quote, setQuote] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to send form data to server for verification

    // Display confirmation message to user
    alert('Thank you for submitting your quote, it has been sent to admin for verification');
  };

  return (
    <div className="quote-form-container">
      <h1>Post a Quote</h1>
      <h2>Do you have an original Quote you would like to see it published. Simply Type in your Quote, once our Team verifies it is original and from you, we will post on the site.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="quote"></label>
          <textarea
            id="quote"
            name="quote"
            rows="4"
            cols="50"
            placeholder='Quote'
            value={quote}
            onChange={(event) => setQuote(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description"></label>
          <textarea
            id="description"
            name="description"
            rows="4"
            cols="50"
            placeholder='Description/Meaning'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author"></label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder='Author'
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fullName"></label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder='Full Name'
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuoteForm;

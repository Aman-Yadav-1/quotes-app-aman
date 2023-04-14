import React, { Component } from 'react';
import '../components/SearchQuotes.css';

class SearchQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
        <div>
        <div className="contentx" style={{position: "relative"}}>
  <h1>Search Quotes</h1>
  <form className='form-elem'>
    <input name="search" type="text" placeholder="Search quotes by author or quote" className="form-elem" />
  </form>
  <div><h3>Categories</h3>
    <div className="flexer">
      <a href="category/5" style={{color: "rgb(255, 255, 255)", minWidth: "250px"}}>
        <div className="category svelte-1o16e9q" style={{width: "100%", display: "flex", justifyContent: "center"}}>Motivation</div>
      </a>
      <a href="category/6" style={{color: "rgb(255, 255, 255)", minWidth: "250px"}}>
        <div className="category svelte-1o16e9q" style={{width: "100%", display: "flex", justifyContent: "center"}}>SENSUAL</div>
      </a>
      <a href="category/9" style={{color: "rgb(255, 255, 255)", minWidth: "250px"}}>
        <div className="category svelte-1o16e9q" style={{width: "100%", display: "flex", justifyContent: "center"}}>FACTS of LIFE</div>
      </a>
      <a href="category/10" style={{color: "rgb(255, 255, 255)", minWidth: "250px"}}>
        <div className="category svelte-1o16e9q" style={{width: "100%", display: "flex", justifyContent: "center"}}>WILLIAM SHAKESPEARE</div>
      </a>
      <a href="category/13" style={{color: "rgb(255, 255, 255)", minWidth: "250px"}}>
        <div className="category svelte-1o16e9q" style={{width: "100%", display: "flex", justifyContent: "center"}}>Charles Dickens</div>
      </a>
      <a href="category/14" style={{color: "rgb(255, 255, 255)", minWidth: "250px"}}>
        <div className="category svelte-1o16e9q" style={{width: "100%", display: "flex", justifyContent: "center"}}>FRONT HOME PAGE</div>
      </a>
      <a href="category/15" style={{color: "rgb(255, 255, 255)", minWidth: "250px"}}>
        <div className="category svelte-1o16e9q" style={{width: "100%", display: "flex", justifyContent: "center"}}>PRINCE</div>
      </a>
      <a href="category/16" style={{color: "rgb(255, 255, 255)", minWidth: "250px"}}>
        <div className="category svelte-1o16e9q" style={{width: "100%", display: "flex", justifyContent: "center"}}>Candace Owens</div>
      </a>
      <a href="category/17" style={{color: "rgb(255, 255, 255)", minWidth: "250px"}}>
        <div className="category svelte-1o16e9q" style={{width: "100%", display: "flex", justifyContent: "center"}}>Jaguar Wright</div></a></div>

        </div>
        <div className='quotis-wrapper'>
        <span className="quotis" style={{ '--count': 65 }}>
      <a style={{ textDecoration: 'none', width: '100%' }} href='#'>
        <blockquote className="nf">
          <p className="quotis trunctate" style={{ marginTop: 10, padding: 50 }}>
          Don’t be the one point of failure!
          </p>
        </blockquote>
      </a>
    </span>
    <span className="quotis" style={{ '--count': 65 }}>
      <a style={{ textDecoration: 'none', width: '100%' }}href='#'>
        <blockquote className="nf">
          <p className="quotis trunctate" style={{ marginTop: 10, padding: 50 }}>
          You want points for cleaning up a mess that you created?
          </p>
        </blockquote>
      </a>
    </span>
    <span className="quotis" style={{ '--count': 65 }}>
      <a style={{ textDecoration: 'none', width: '100%' }}href='#'>
        <blockquote className="nf">
          <p className="quotis trunctate" style={{ marginTop: 10, padding: 50 }}>
            Remeber you don't have enemies, no one has them. It's never to okay to hurt someone.
          </p>
        </blockquote>
      </a>
    </span>
    <span className="quotis" style={{ '--count': 65 }}>
      <a style={{ textDecoration: 'none', width: '100%' }}href='#'>
        <blockquote className="nf">
          <p className="quotis trunctate" style={{ marginTop: 10, padding: 50 }}>
          He that loves my flesh and blood is my friend.
          </p>
        </blockquote>
      </a>
    </span>
    <span className="quotis" style={{ '--count': 65 }}>
      <a style={{ textDecoration: 'none', width: '100%' }}href='#'>
        <blockquote className="nf">
          <p className="quotis trunctate" style={{ marginTop: 10, padding: 50 }}>
          Not everyone that smiles at you wishes you well!
          </p>
        </blockquote>
      </a>
    </span>
    <span className="quotis" style={{ '--count': 65 }}>
      <a style={{ textDecoration: 'none', width: '100%' }}href='#'>
        <blockquote className="nf">
          <p className="quotis trunctate" style={{ marginTop: 10, padding: 50 }}>
          A sense of responsibility is a real must in todays society
          </p>
        </blockquote>
      </a>
    </span>
    <span className="quotis" style={{ '--count': 65 }}>
      <a style={{ textDecoration: 'none', width: '100%' }}href='#'>
        <blockquote className="nf">
          <p className="quotis trunctate" style={{ marginTop: 10, padding: 50 }}>
          Winning means nothing if no-one actually loses
          </p>
        </blockquote>
      </a>
    </span>
    <span className="quotis" style={{ '--count': 65 }}>
      <a style={{ textDecoration: 'none', width: '100%' }}href='#'>
        <blockquote className="nf">
          <p className="quotis trunctate" style={{ marginTop: 10, padding: 50 }}>
          No one wants to be on the losing side!
          </p>
        </blockquote>
      </a>
    </span></div>
      </div></div>
      
    );
  }
}

  
export default SearchQuotes;

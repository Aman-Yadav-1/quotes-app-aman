import React, { useEffect, useState } from 'react';
import '../components/About.css';
import '../../node_modules/@ignatiusmb/scramble/lib/scramble'

function FadeInParagraph() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [font, setFont] = useState('Noto Sans Egyptian Hieroglyphs');
  
  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => {
      setFont('Segoe Script Regular');
    }, 2000);
  }, []);

  return (
    <div className="fade-in-container">
      <div className="border">
        <h1>About HEQ</h1>
        <p className={`fade-in-text ${isLoaded ? 'loaded' : ''} ${font}`}>
          An in-depth collection of inspirational, (so sometimes direct) Quotes, Statements, lyrics, proverbs, words, opinions, scripted art, from the Creative, Influencers, Authors, Politicians, Writers, Artist, Everyday People, Heq, Others, and You Where everything can be viewed and experienced, interpreted precisely how you hear, see or feel it……! Remember tea just ain’t for everyone!
        </p>
      </div>
    </div>
  );
}

export default FadeInParagraph;

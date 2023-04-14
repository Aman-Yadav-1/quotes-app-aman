import React, { useEffect, useState } from 'react';
import '../components/qotd.css';

function FadeInParagraph() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="fade-in-container">
      <div className="border">
        <h1>Quote Of The Day</h1>
        <p className={`fade-in-text ${isLoaded ? 'loaded' : ''}`}>
        When your opinion’s wanted, you give it, when you’re spoke to, you speak, Don't speak unnecessarily, there is more too see than speak. Remember you don't have any enemies, no one has them. There's no one who its okay to hurt.
        </p>
      </div>
    </div>
  );
}

export default FadeInParagraph;

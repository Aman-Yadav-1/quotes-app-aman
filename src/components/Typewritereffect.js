import React, { useEffect, useState } from 'react';
import "../components/twe.css"

function TypewriterEffect({ text, speed }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => clearInterval(intervalId);
  }, [speed]);

  const currentText = text
    .split(' ')
    .slice(0, currentIndex)
    .map((word, index) => {
      const isLastWord = index === currentIndex - 1;
      const cursor = isLastWord ? <span className="blink">|</span> : '';
      return (
        <React.Fragment key={index}>
          {word} {cursor}
        </React.Fragment>
      );
    });

  return <p>{currentText}</p>;
}

export default TypewriterEffect;

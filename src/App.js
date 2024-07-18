import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './App.css';
import video from './video.mp4'

const numCakes = 10;
const numSkirts = 10;
const numPanties = 10;
const numFigures = 10;
const numBooks = 10;

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderItems = (numItems, src, className) => {
    return Array.from({ length: numItems }).map((_, i) => (
      <img
        key={i}
        src={src}
        alt={className}
        className={`falling-item ${className}`}
        style={{ left: `${Math.random() * windowWidth}px`, animationDelay: `${Math.random() * 10}s` }}
      />
    ));
  };

  return (
    <div className="App">
      {/* <video className="video-background" poster="023.png" autoPlay loop >
        <source src="../public/video.mp4" type="video/mp4" />
      </video> */}
      <video id="video" className="video-background" src={video} autoPlay loop muted playsInline controls />
      <Confetti width={windowWidth} height={windowHeight} />
      {renderItems(numCakes, '/cake.png', 'cake')}
      {renderItems(numSkirts, '/skirt.png', 'skirt')}
      {renderItems(numPanties, '/panties.png', 'panties')}
      {renderItems(numFigures, '/figure.png', 'figure')}
      {renderItems(numBooks, '/book.png', 'book')}
      <header className="App-header">
        <h1>Happy Birthday, Даночка!</h1>
        <p>Wishing you a day filled with love and joy and big boobies and booty!</p>
      </header>
    </div>
  );
}

export default App;

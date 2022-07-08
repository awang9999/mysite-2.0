import React from 'react';

import { Link } from 'react-router-dom';

import '../App.css';
import './HeroSection.css';

function HeroSection() {

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <>
      <div className='hero-container'>
        <video src='/videos/website_hero.mp4' autoPlay loop muted playsinline />
        <h3>Hello! I'm</h3>
        <h1>Alexander</h1>
        <Link to="/#about" className='more-chevron'>
          <i className="fa-solid fa-chevron-down"></i>
        </Link>
      </div>
    </>
  );
}

export default HeroSection;

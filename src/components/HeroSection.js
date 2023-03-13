import React from 'react';

import { Link } from 'react-router-dom';

import '../App.css';
import './HeroSection.css';

function HeroSection() {

  return (
    <>
      <div className='hero-container raleway'>
        <video src='/videos/website_hero.mp4' poster='/images/video_poster.jpg' autoPlay loop muted />
        <div className='hero-content'>
          <h3>Hello! I'm</h3>
          <h1>Alexander</h1>
          <Link to="/#about" className='more-chevron'>
            <i className="fa-solid fa-chevron-down"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

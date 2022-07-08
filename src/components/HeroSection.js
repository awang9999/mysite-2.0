import React from 'react';

import { Link } from 'react-router-dom';

import { Element } from 'react-scroll';

import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <Element id='top' name='top'>
      <div className='hero-container'>
        <video src='/videos/website_hero.mp4' autoPlay loop muted playsinline />
        <h3>Hello! I'm</h3>
        <h1>Alexander</h1>
        <Link to="/#about" className='more-chevron'>
          <i className="fa-solid fa-chevron-down"></i>
        </Link>
      </div>
    </Element>
  );
}

export default HeroSection;

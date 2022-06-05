import React from 'react';

import { Link } from 'react-router-dom';

import { Button } from './Button';

import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div id='top' className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h3>Hello! I'm</h3>
      <h1>Alexander</h1>
      <a href="#about" className='more-chevron'>
        <i className="fa-solid fa-chevron-down"></i>
      </a>
    </div>
  );
}

export default HeroSection;

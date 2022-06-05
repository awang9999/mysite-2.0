import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import './AboutSection.css';

function AboutSection() {
  return (
    <div className='about-container'>
      <a class='anchor' id='about'></a>
      <h1>About Me</h1>
      <div className='about-content'>
        <img src='images/picture2.jpg' alt='Profile Picture' />
        <div className='about-content-item'>
          <p>
            Hey! My name is Alexander Wang, and I'm a computer
            science and mathematics double major at Cornell
            University. My aspiration to resolve real-world problems
            using mathematical methods led me to focus on machine
            learning and numerical analysis.
            Check out my course work here!
          </p>
          <p>
            Although I go to school on the East Coast, I'm native
            to the Bay Area in California and currently still reside
            there.
          </p>
          <p>
            In my free time, I enjoy exploring new places,
            learning new recipes, going on scenic runs/bike rides,
            and reading interesting math or computer science content.
            Don't hesitate to reach out if you'd like to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

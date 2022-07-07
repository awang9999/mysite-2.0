import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'


import '../App.css';
import './AboutSection.css';

function AboutSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: 'start' })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,])

  return (
    <div className='about-container'>
      <button className='anchor' id='about'></button>
      <h1>About Me</h1>
      <hr />
      <div className='about-content'>
        <img src='images/picture2.jpg' alt='Profile showing Alexander in front of the Colosseum' />
        <div className='about-content-item'>
          <p>
            Hey! My name is Alexander Wang, and I'm a computer
            science and mathematics double major at Cornell
            University. My aspiration to resolve real-world problems
            using mathematical methods led me to focus on machine
            learning and numerical analysis.
            Check out my work here!
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

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
    <div className='about-container raleway'>
      <button className='anchor' id='about'></button>
      <h1>About Me</h1>
      <hr />
      <div className='about-content'>
        <img src='images/picture3.jpg' alt='Profile showing Alexander in front of the Colosseum' />
        <div className='about-content-item'>
          <p>
              Hey! My name is Alexander Wang, and I recently graduated
			        from Cornell University ('22) with a dual degree in mathematics
			        and computer science. My aspiration to resolve real-world
			        problems using mathematical methods led me to focus on
			        machine learning and scientific computing during my degrees.
			        I am currently looking for internship and full-time opportunities
              in SWE.
          </p>
          <p>
              Despite attending school on the East Coast, I am native to California
              and the Bay Area having lived there for the past 20 years.
              (pretty much my whole life) I am excited to be back after a couple
              years spent in the cold!
          </p>
          <p>
              In my free time, I enjoy exploring new places,
              learning to cook new recipes, building Lego models, and
			        going on scenic runs/bike rides.
              Don't hesitate to reach out if you'd like to get in touch!
          </p>
		  Contact me at:
		  <ul>
			<li><b>alexander.wang2001@gmail.com</b> or</li>
			<li><b>aw576@cornell.edu</b></li>
		  </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

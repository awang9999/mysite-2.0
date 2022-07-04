import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../App.css';
import './ExperienceSection.css';

function ExperienceSection() {
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
  }, [location,]);

  return (
    <div className='experience-container'>
      <a className='anchor' id='experience'></a>
      <h1>Experience</h1>
      <hr />
      <div className='experience-content'>
        <img src='images/amazon_music.jpg' alt='Amazon Music Logo' />
        <div className='experience-content-item'>
          <h2>Software Engineering Intern</h2>
          <h4 className='ital'>San Francisco, CA - Summer 2022</h4>
          <p>
            My internship is still ongoing! Check out this blurb after
            August 2022!
          </p>
        </div>

        <img src='images/cornell_cis.jpg' alt='Cornell CIS Logo' />
        <div className='experience-content-item'>
          <h2>CS 4780 Teaching Assistant</h2>
          <h4 className='ital'>Ithaca, NY - August 2021 to Present</h4>
          <p>
            CS 4780 is the Introduction to Machine Learning course
            at Cornell University. As a Teaching Assistant, I create
            and grade assignments, projects, and exams for the
            course. In addition, I hold office hours where I help
            students master everything from KNNs to ensembles of
            deep neural networks.
          </p>
        </div>

        <img src='images/aws.png' alt='Amazon Web Services Logo' />
        <div className='experience-content-item'>
          <h2>Software Engineering Intern</h2>
          <h4 className='ital'>Seattle, WA - Summer 2021</h4>
          <p>
            I spent my summer working as a SWE intern for AWS Connect,
            an AWS service for creating call centers quickly
            and at scale. My project focused on implementing delete
            protocols for critical resources according to the rules of
            GDPR. My project was mostly written in Java with some scripting
            done in Ruby.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;

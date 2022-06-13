import React from 'react';

import '../App.css';
import './ProjectsSection.css';

import CardItem from './CardItem';

function ProjectsSection() {
  return (
    <div className='projects-container'>
      <a className='anchor' id='projects'></a>
      <h1>Featured Projects</h1>
      <hr />
      <h4>Click on any project to learn more!</h4>
      <div className='projects-content'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              title='Personal Website'
              src='images/mysite2.jpg'
              text='This website is built from scratch using
              React.js, HTML, CSS, and Javascript. It is deployed
              using AWS S3 and CloudFront. This was my first dive
              into React.js.
              Although it barely scrapes the surface of what
              the library is capable of, I learned a lot about
              designing components and implementing a user
              interface according to a basic wireframe.'
              label='React.js'
              path='https://github.com/awang9999/mysite-2.0'
            />
            <CardItem
              title='ProjectX 2021'
              src='images/projectx.png'
              text='I led six dedicated students representing Cornell University
                to compete in
                ProjectX, an annual undergraduate research competition
                hosted by the University of Toronto.
                We investigated to what
                extent misinformation permeated social media
                in the context of the COVID-19 pandemic. We produced
                a misinformation detection model based on BERT and
                a mathematical model to assess the virality
                of a post and ultimately won the
              competition in the Epidemiology category. This gave
                us the opportunity to present our findings at the 2022
                University of Toronto AI Conference. Check out our paper!'
              label='Machine Learning, Python'
              path='https://github.com/CornellDataScience/ProjectX-2021'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;

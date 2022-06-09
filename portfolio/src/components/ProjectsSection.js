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
      <div className='projects-content'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              title='Personal Website'
              src='images/mysite2.jpg'
              text='This website is built entirely using
              React.js, HTML, CSS, and Javascript. It is hosted
              using AWS S3. This was my first dive into React.js.
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
              text='ProjectX is an annual undergraduate research
                competition hosted by the University of Toronto.
                I led a team of 6 dedicated students on behalf
                of Cornell University
                and the Cornell Data Science project team to
                investigate to what
                extent misinformation permeated social media
                in the context of the COVID-19 pandemic. We produced
                a misinformation detection model based on BERT and
                an associated mathematical model to assess the virality
                of a post. We won the
                competition in the Epidemiology category which gave
                us the opportunity to present our paper at the
                University of Toronto AI Conference.'
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

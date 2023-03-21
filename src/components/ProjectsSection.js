import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import '../App.css';
import './ProjectsSection.css';

import CardItem from './CardItem';

function ProjectsSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,]);

  return (
    <div className='projects-container raleway'>
      <button className='anchor' id='projects'></button>
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
              React.js, HTML, CSS, and JavaScript. It is continuously integrated
              and deployed using CircleCI. The website is hosted on AWS S3 and
              served bym AWS CloudFront.
              This was my first dive into React.js as well as continuous
              integration and deployment.
              Although it barely scrapes the surface of what
              the React.js is capable of, I learned a lot about
              designing components and implementing a user
              interface according to a basic wireframe.
              Moreover, I became much more familiar with AWS S3, CloudFront and
              DNS routing during this project.'
              label='React.js'
              path='https://github.com/awang9999/mysite-2.0'
            />
			<CardItem
              title='MathSearch'
              src='images/mathsearch_team_pic.jpg'
              text='MathSearch is a project idea I developed during my
                    undergraduate degree in mathematics. I wanted a way
                    to search for equations within academic texts like 
                    pdfs of research papers or textbooks. I 
                    assembled a team of 14 students from Cornell Data Science
                    and spent the Fall 2022 semester developing a prototype
                    search engine to serve this purpose. We fine-tuned YoloV7 
                    (object detection) and a siamese network to recognize
                    equations and compare them to the search query. Then, we
                    integrated this backend with AWS and a React.js frontend
                    to create a prototype end-to-end product.'
              label='ML, AWS, Javascript'
              path='https://github.com/CornellDataScience/MathSearch'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;

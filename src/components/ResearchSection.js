import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../App.css';
import './ResearchSection.css';

function ResearchSection() {
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
    <div className='research-container'>
      <button className='anchor' id='research'></button>
      <h1>Research</h1>
      <hr />
      <div className='research-content'>
        <img src='images/projectx.png' alt='Project X Confusion Matrix' />
        <div className='research-content-item'>
          <h2>ProjectX 2021</h2>
			<h4 className='ital'>Ithaca, NY - Aug 2021 to Feb 2022</h4>
          <p>
              I led six dedicated students representing Cornell
			  University to win ProjectX 2021, an annual
			  undergraduate research competition hosted by the
			  University of Toronto. We investigated how
			  misinformation permeated social media in the
			  context of the COVID-19 pandemic. We produced a
			  misinformation detection model based on BERT and a
			  mathematical model to assess the virality of a
			  post and won the competition in the Epidemiology
			  category. This gave us the opportunity to present
			  our work at the 2022 University of Toronto AI
			  Conference. Check out our paper! <br/>
			  <b>
				  [<a
					  href="https://github.com/CornellDataScience/ProjectX-2021"
					  target="_blank" >github</a>]
				  [<a
					   href="https://arxiv.org/abs/2207.01483"
				   target="_blank">paper</a>]
			  </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResearchSection;

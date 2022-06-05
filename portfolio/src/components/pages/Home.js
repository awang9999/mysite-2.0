import React from 'react';

import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import ExperienceSection from '../ExperienceSection';

import '../../App.css';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <hr />
      <ExperienceSection />
    </>
  );
}

export default Home;

import React from 'react';

import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import ExperienceSection from '../ExperienceSection';
import ProjectsSection from '../ProjectsSection';

import '../../App.css';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
}

export default Home;

import React from 'react';

import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import ResearchSection from '../ResearchSection';
import ExperienceSection from '../ExperienceSection';
import ProjectsSection from '../ProjectsSection';

import '../../App.css';

function Home() {
  return (
    <>
		<HeroSection />
		<AboutSection />
		<ResearchSection />
		<ExperienceSection />
		<ProjectsSection />
    </>
  );
}

export default Home;

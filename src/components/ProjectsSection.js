import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../App.css';
import './ProjectsSection.css';

import CardItem from './CardItem';

function ProjectsSection() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className="projects-container raleway">
            <button className="anchor" id="projects"></button>
            <h1>Featured Projects</h1>
            <hr />
            <h4>Click on any project to learn more!</h4>
            <div className="projects-content">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            title="Personal Website"
                            src="images/mysite2.jpg"
                            text="Built from scratch with React.js and deployed via CircleCI to AWS S3 and CloudFront. My first project exploring React components, CI/CD pipelines, and AWS infrastructure including S3, CloudFront, and Route53 DNS routing."
                            label="React.js"
                            path="https://github.com/awang9999/mysite-2.0"
                        />
                        <CardItem
                            title="MathSearch"
                            src="images/mathsearch_team_pic.jpg"
                            text="mathSearch is search engine for finding equations in academic PDFs and textbooks. I led a team of 14 Cornell Data Science students to build a prototype using fine-tuned YoloV7 for equation detection, a siamese network for comparison, and a React.js frontend integrated with AWS."
                            label="ML, AWS, Javascript"
                            path="https://github.com/CornellDataScience/MathSearch"
                        />
                        <CardItem
                            title="Hearts"
                            src="images/hearts-project.png"
                            text="Tasked by a friend with grandparents sick of Ads in available Hearts games. I built a singleplayer Hearts card game and deployed in just a few hours using Kiro Agentic AI. This demonstrates rapid prototyping with AI assistance, from initial concept to publicly hosted web application."
                            label="Typescript, AWS, Agentic AI"
                            path="https://github.com/awang9999/hearts-game"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;

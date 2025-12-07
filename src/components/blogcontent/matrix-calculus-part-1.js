import React from 'react';

import '../../App.css';
import './blogcontent.css';

import ScrollToTop from '../ScrollToTop';

import Markdown from '../Markdown.js';
import MatrixCalculusTOC from './matrix-calculus-toc.js';

function MatrixCalculusPart1() {
    const articleSource = 'blog/matrix-calculus-chapter1.md';

    return (
        <>
            <ScrollToTop>
                <div className="blog-article-container raleway">
                    <div className="blog-article-content">
                        <div className="blog-article-title">
                            <h1>Matrix Calculus | Chapter 1: Preliminaries</h1>
                            <h3>
                                Here is a review of concepts from multivariable calculus that are
                                helpful for learning matrix calculus.
                            </h3>
                        </div>

                        <hr />

                        <div className="blog-article-hero">
                            <img
                                src="./images/matrix-background.jpg"
                                alt="matrix text decoration"
                            />
                        </div>

                        <MatrixCalculusTOC />

                        <div className="blog-article" id="blog-article">
                            <Markdown src={articleSource} />
                        </div>
                    </div>
                </div>
            </ScrollToTop>
        </>
    );
}

export default MatrixCalculusPart1;

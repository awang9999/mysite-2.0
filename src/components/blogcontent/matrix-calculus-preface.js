import React from 'react';

import '../../App.css';
import './blogcontent.css';

import ScrollToTop from '../ScrollToTop';

import Markdown from '../Markdown.js';
import MatrixCalculusTOC from './matrix-calculus-toc.js';

function MatrixCalculusPreface() {
    const articleSource = 'blog/matrix-calculus-preface.md';

    return (
        <>
            <ScrollToTop>
                <div className="blog-article-container raleway">
                    <div className="blog-article-content">
                        <div className="blog-article-title">
                            <h1>Matrix Calculus | Preface</h1>
                            <h3>
                                A series of articles about matrix calculus and machine learning.
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

export default MatrixCalculusPreface;

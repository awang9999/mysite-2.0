import React from 'react';

import '../../App.css';
import './blogcontent.css';

import ScrollToTop from '../ScrollToTop';

import Markdown from '../Markdown.js';
import MatrixCalculusTOC from './matrix-calculus-toc.js';

function MatrixCalculusPart1() {
    const articleSource = 'blog/matrix-calculus-chapter2.md';

    // React.useEffect(() => {

    //     var canvas, ctx;

    //     var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ' +
    //         'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ' +
    //         'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';

    //     letters = letters.split('');

    //     // Setting up the columns
    //     var fontSize = 15;
    //     var columns;

    //     // Setting up the drops
    //     var drops = [];

    //     // Setting up the draw function
    //     function draw() {
    //         ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    //         ctx.fillRect(0, 0, canvas.width, canvas.height);

    //         for (var i = 0; i < drops.length; i++) {
    //             var text = letters[Math.floor(Math.random() * letters.length)];

    //             colorText(text, i * fontSize, drops[i] * fontSize, '#0f0', fontSize + "px");

    //             drops[i]++;

    //             if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
    //                 drops[i] = 0;
    //             }
    //         }
    //     }

    //     function colorText(showWords, textX, textY, fillColor, fontSize) {
    //         ctx.font = `${fontSize} Courier New`;
    //         ctx.fillStyle = fillColor;
    //         ctx.fillText(showWords, textX, textY);
    //     }

    //     canvas = document.querySelector('canvas');
    //     ctx = canvas.getContext('2d');

    //     columns = canvas.width / fontSize;

    //     const compStyles = window.getComputedStyle(canvas);
    //     canvas.width = compStyles.width.substr(0, compStyles.width.length - 2);
    //     canvas.height = compStyles.height.substr(0, compStyles.height.length - 2);

    //     for (var i = 0; i < columns; i++) {
    //         drops[i] = 1;
    //     }

    //     setInterval(draw, 70);

    // }, []);

    return (
        <>
            <ScrollToTop>
                <div className="blog-article-container raleway">
                    <div className="blog-article-content">
                        <div className="blog-article-title">
                            <h1>Matrix Calculus | Chapter 2: The Total Derivative</h1>
                            <h3>
                                In this chapter we develop the derivative for functions of several
                                variables.
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

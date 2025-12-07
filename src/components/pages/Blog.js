import React from 'react';

import '../../App.css';
import './Blog.css';

import ScrollToTop from '../ScrollToTop';
import BlogIndexItem from '../BlogIndexItem';

function Blog() {
    return (
        <>
            <ScrollToTop>
                <div className="blog-container">
                    <div className="blog-title">
                        <h1>Square Zero</h1>
                        <hr />
                        <p>
                            Hello! I write articles exploring computer science, mathematics, machine
                            learning, and the intersection of them all! Keep reading to see what I
                            have been working on and interested in recently.
                        </p>
                        <hr />
                    </div>
                    <div className="blog-index">
                        <ul className="index_items">
                            <BlogIndexItem
                                src="./images/multivariate.png"
                                alt="Cover art for Matrix Calculus"
                                title="Matrix Calculus Chapter 2 | The Total Derivative"
                                pubdate="03/21/2023"
                                readingtime="9"
                                text="In this chapter, we will examine how the derivative
generalizes to functions with multiple variables in its domain. This is
unfortunately not a trivial generalization and the definition we provide
will seem cryptic at first. However, we will soon see that the
definition provides several of the conveniences we would expect from the
derivative, and maybe even some additional advantages."
                                path="/blog/matrix-calculus-part-2"
                            />

                            <BlogIndexItem
                                src="./images/multivariate.png"
                                alt="Cover art for Matrix Calculus"
                                title="Matrix Calculus Chapter 1 | Preliminaries"
                                pubdate="03/21/2023"
                                readingtime="10"
                                text="We can begin the discussion of matrix calculus by revisiting the definition of a derivative. For many students, the difference quotient definition will be familiar. We will show that this is equivalent to a defining the derivative as the best linear approximator of the function. This setup will lay the foundations for discussing derivatives of matrix-like objects."
                                path="/blog/matrix-calculus-part-1"
                            />

                            <BlogIndexItem
                                src="./images/multivariate.png"
                                alt="Cover art for Matrix Calculus"
                                title="Matrix Calculus Chapter 0 | Preface"
                                pubdate="03/21/2023"
                                readingtime="3"
                                text="Matrix Calculus is an elusive topic that is too complicated for multivariable calculus, too simple for analysis, too off-topic for linear algebra, and a prerequisite for several machine learning courses. As someone who once struggled while learning it, I hope to write a guide for future students learning matrix calculus in the context of machine learning."
                                path="/blog/matrix-calculus-preface"
                            />
                        </ul>
                    </div>
                </div>
            </ScrollToTop>
        </>
    );
}

export default Blog;

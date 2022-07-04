import React from 'react';

import '../../App.css';
import './Blog.css';

import '../ScrollToTop';
import ScrollToTop from '../ScrollToTop';

function Blog() {
  return (
    <>
      <ScrollToTop>
        <div class='blog-container'>
          <h1>Alexander Wang's Blog</h1>
          <div class='blog-content'>
            <p>
              Hey! You've made it to my blog. This page isn't quite
              ready yet, so please sit tight while it's being developed!
              Hopefully it'll be done soon!
            </p>
            <p>
              [Coming December 2022]
            </p>
          </div>
        </div>
      </ScrollToTop>
    </>
  );
}

export default Blog;

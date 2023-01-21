import React from 'react';

import '../../App.css';
import './Blog.css';

import '../ScrollToTop';
import ScrollToTop from '../ScrollToTop';

function Blog() {
  return (
    <>
      <ScrollToTop>
        <div className='blog-container'>
          <h1>Alexander Wang's Blog</h1>
          <div className='blog-content'>
            <p>
              Hey! You've made it to my blog. This page isn't quite
              ready yet, so please sit tight while it's being developed!
              Hopefully it'll be done soon!
            </p>
            <p>
              [Coming January 2023]
            </p>
            <div className='blog-notes-index'>
              <h2>Notes:</h2>
              <div className='blog-notes-index-content'>
                <ul>
                  <li><p>Hello world</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ScrollToTop>
    </>
  );
}

export default Blog;


import React from 'react';

import '../../App.css';
import './Changelog.css';

import '../ScrollToTop';
import ScrollToTop from '../ScrollToTop';

function Changelog() {
  return (
    <>
      <ScrollToTop>
        <div className='changelog-container'>
			<h1>Website History</h1>
			<hr/>
          <div className='changelog-content'>
            <p>
				This page details all changes to my website. It is both a way for
				you to see what has changed over time as well as a place for
				myself to remember what and when I added to the website.
            </p>

			  
              <div className='changelog-notes'>
				  <ul>
					  <li>
						  <p>
							  <b>Version 2.1.0 [January 2023]</b>: <br/>
							  Several changes were made to the website. Firstly,
							  I updated all the information to reflect all my
							  achievements since graduating from Cornell
							  University last December. I also exchanged my Resume
							  for a CV which is more appropriate for academic
							  positions (for which I am applying to).
							  Additionally, I added the Research Section to
							  my home have which reflects my current experience
							  in that field. Lastly, I
							  added this Website History page and changed the
							  overall color scheme to use the Nord color palette.
							  This is all in preparation for adding the Blog
							  section which is long overdue now. (Originally
							  promised December 2022)
						  </p>
					  </li>
					  <li>
						  <p>
							  <b>Version 2.0.1 [July 2022]</b>: <br/>
							  I integrated my website project with CircleCI
							  in order to allow for continuous integration and
							  development. Now, it will automatically push
							  changes to the live website whenever I merge
							  the main branch with the live branch in Github.
						  </p>
					  </li>
					  <li>
						  <p>
							  <b>Version 2.0.0 [June 2022]</b>: <br/>
							  I took down the first version of my personal
							  website and changed the stack and deployment
							  strategy. I switched the source code to a React.js
							  framework and changed the hosting method to AWS S3.
							  I also registered the current domain name
							  -- <a href="https://alexander-wang.net">
									 alexander-wang.net
								 </a>
							  --
							  and serve it using AWS CloudFront. The new Github
							  repository can be found here: [
							  <a href="https://github.com/awang9999/mysite-2.0"
								 target="_blank"
								 rel="noreferrer">
								  Github
							  </a>
							  ]
						  </p>
					  </li>
					  <li>
						  <p>
							  <b>Version 1.0.0 [January 2021]</b>: <br/>
							  This version of the website was hosted on awang.io
							  prior to my domain switch and website renovation.
							  It was a pure HTML/CSS/JS website that had the bare
							  necessities. It's remnents can be found here: [
							  <a href="https://github.com/awang9999/mysite"
								 target="_blank"
								 rel="noreferrer">
								  Github
							  </a>
							  ]
				          </p>
					  </li>
				  </ul>
            </div>
			  
          </div>
        </div>
      </ScrollToTop>
    </>
  );
}

export default Changelog;


import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {

  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="images/title.svg" alt='Alexander Logo' className="filter-white" />
            </Link>
          </div>
          <div className='footer-contactme'>
            <p>Interested in connecting? Shoot me an email or DM on any social media!</p>
            <p>Email: alexander.wang2001@gmail.com</p>
          </div>
          <div className='social-icons'>
            <a
              className='social-icon-link github'
              href='https://github.com/awang9999'
              target='_blank'
              rel="noreferrer"
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link instagram'
              href="https://www.instagram.com/_alexanderwang_/"
              target='_blank'
              rel="noreferrer"
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link twitter'
              href='https://twitter.com/awang99999'
              target='_blank'
              rel="noreferrer"
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/awang9999/'
              target='_blank'
              rel="noreferrer"
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
          <small className='website-version'>v1.1.0</small>
          <small className='website-rights'>Alexander Wang © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;

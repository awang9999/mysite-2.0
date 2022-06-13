import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 1120) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/#top' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="images/title.svg" className="filter-white" />
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='/#about' className='nav-links' onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a href='/#experience' className='nav-links' onClick={closeMobileMenu}>
                Experience
              </a>
            </li>
            <li className='nav-item'>
              <a href='/#projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-links' target='_blank' href={process.env.PUBLIC_URL + '/files/alexander_resume.pdf'} onClick={closeMobileMenu}>
                Resume
              </a>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {/* button && <Button buttonStyle='btn--outline'>Contact</Button>*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

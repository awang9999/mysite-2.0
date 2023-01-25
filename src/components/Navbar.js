import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="images/title.svg" alt='Alexander logo' className="filter-white" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/#about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
			  
            <li className='nav-item'>
              <Link to='/#research' className='nav-links' onClick={closeMobileMenu}>
                Research
              </Link>
            </li>
			  
            <li className='nav-item'>
              <Link to='/#experience' className='nav-links' onClick={closeMobileMenu}>
                Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <a className='nav-links' target='_blank' rel='noreferrer' href={process.env.PUBLIC_URL + '/files/alexander_wang_cv.pdf'} onClick={closeMobileMenu}>
                CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
        <div className="container">
          <img src="preview.jpg" alt="Logo" className="logo" />
          <div className="nav-items">
            <nav>
              <ul>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/CoursesPage'} >Courses</Link></li>
              </ul>
            </nav>
          </div>
          <button className="button"><Link to={'/signup'} className='link1'>Enroll Now</Link></button>
        </div>
      </header>
  );
};

export default Navbar;

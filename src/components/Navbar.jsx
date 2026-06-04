import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='responsive'>
      <nav className="navbar-wrapper">
        
        {/* Logo Section */}
        <div className='over'>
          <img 
            src="https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/08/Books.jpg" 
            alt="Library Logo" 
          />
          <h1>Library MS</h1>
        </div>

        {/* Hamburger Icon */}
        <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to='/' onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={() => setMenuOpen(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to='/books' onClick={() => setMenuOpen(false)}>Books</NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={() => setMenuOpen(false)}>Contacts</NavLink>
          </li>
          <li className="auth-container">
            <NavLink to='/login' className="login-btn" onClick={() => setMenuOpen(false)}>Login</NavLink>
          </li>
          <li className="auth-container">
            <NavLink to='/register' id='sinup' className="register-btn" onClick={() => setMenuOpen(false)}>Register</NavLink>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;
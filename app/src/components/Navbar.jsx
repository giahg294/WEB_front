import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false);

      } else {
        setButton(true);
      }
    };

    window.addEventListener('resize', showButton);

    return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo + Texte */}
          <div className="nav-title">
            <Link to="/" className="navbar-logo">
              <img src="/insaquatic.png" alt="Logo INSAQUATIC" className="navbar-logo-img" />
            </Link>
            <Link to="/" className="navbar-text">
              INSAQUATIC
            </Link>
          </div>
      
          {/* Icône Menu */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                A propos
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                Evénements
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/adhesion' className='nav-links' onClick={closeMobileMenu}>
                Adhésion
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';


function Navbar() {
    const location = useLocation(); // Récupère l'URL actuelle
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
          <div className="nav-title">
            <Link to="/" className="navbar-logo">
              <img src="/insaquatic.svg" alt="Logo INSAQUATIC" className="navbar-logo-img" />
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
                <Link to='/' className={`nav-links ${location.pathname === "/" ? "active" : ""}`} onClick={closeMobileMenu}>
                A propos
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/events' className={`nav-links ${location.pathname === "/events" ? "active" : ""}`} onClick={closeMobileMenu}>
                Evénements
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/adhesion' className={`nav-links ${location.pathname === "/adhesion" ? "active" : ""}`} onClick={closeMobileMenu}>
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

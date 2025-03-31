import React from 'react';
import'./Infobar.css';
import { Link } from 'react-router-dom';

function Infobar() {
    return(
        <footer className="infobar">
            <div className="infobar-container">
                <p>© 2025 INSAQUATIC</p>
                <div className="infobar-links">
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/mentions">Mentions légales</Link>
                </div>
            </div>
        </footer>
    );
}

export default Infobar;
import React from 'react';
import'./Infobar.css';
import { Link } from 'react-router-dom';

function Infobar() {
    return(
        <footer className="infobar">
            <div className="infobar-container">

                <div className="infobar-social">
                <span className="infobar-contact">Contacts</span>
                    <a
                        href="https://www.instagram.com/insaquatic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-link"
                    >
                        <i className="fab fa-instagram"></i> @insaquatic
                    </a>
                    <span className="infobar-mail">insaquatic@gmail.com</span>
                </div>

                <div className="infobar-right">
                    <p>© 2025 INSAQUATIC</p>
                </div>
            </div>
        </footer>
    );
}

export default Infobar;
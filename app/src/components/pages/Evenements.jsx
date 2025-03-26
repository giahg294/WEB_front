import React from 'react';
import Navbar from '../Navbar';
import "./Evenements.css";
import ListEvents from '../ListEvents';

function Evenements() {
  return (
    <div className="Evenements">
      <Navbar />
      <img src="/eau.jpg" alt="Fond Eau" className="background-image" />
      <div className="eventspage">
        <div className='title'>
          Les événements du mois : 
        </div>
      <ListEvents />
      </div>
    </div>
  );
}

export default Evenements;
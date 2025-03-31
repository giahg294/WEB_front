import React from 'react';
import Navbar from '../Navbar';
import "./Evenements.css";
import ListEvents from './ListEvents';
import Infobar from '../Infobar';

function Evenements() {
  return (
    <div className="Evenements">
      <Navbar />
      {/* <img src="/eau.jpg" alt="Fond Eau" className="background-image" /> */}
      <div className="eventspage">
        <div className='title'>
          Les événements du mois : 
        </div>
      <ListEvents />
      </div>
      <Infobar />
    </div>
  );
}

export default Evenements;
import React from 'react';
import Navbar from '../Navbar';
import './Adhesion.css';
import Infobar from '../Infobar';
import ListAdhesion from './ListAdhesion';

function Adhesion() {
  return (
    <div className="Adhesion">
      <Navbar />
      <div className="eventspage">
        <div className='title'>
          Les adhésions disponibles : 
        </div>
      <ListAdhesion />
      </div>
      <Infobar />
    </div>
  );
}

export default Adhesion;
import React from 'react';
import Navbar from '../Navbar';
import './Adhesion.css';
import Infobar from '../Infobar';
import ListAdhesion from './ListAdhesion';

function Adhesion() {
  return (
    <div className="Ad">
      <Navbar />
      <div className="page">
        <div className='ad-title'>
          Adhésion INSAQUATIC 2025-2026
        </div>
        <div className='ad-container'>
          <p style={{ fontSize: '16px' }}>
            Pour participer à nos événements, l'adhésion est obligatoire.<br />
            En adhérant, vous soutenez notre association et vous obtenez également la possibilité de participer à la prise de décision de l'association.
          </p>
        </div>
      <ListAdhesion />
      </div>
      <Infobar />
    </div>
  );
}

export default Adhesion;
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
            Pour participer à nos événements, l'adhésion est <strong>obligatoire</strong>. En adhérant, vous soutenez notre<br/>
            association et vous obtenez également la possibilité de participer à la prise de décision de l'association.
          </p>
        </div>




        <div className='ad-title'>
          Abonnement réduit
        </div>
        <div className='ad-container'>
          <p style={{ fontSize: '16px' }}>
            Cet abonnement vous permet de nager autant de fois que vous le souhaitez pendant un semestre entier. <br />
            Pour souscrire à cet abonnement, vous devez être titulaire d'une <strong>carte VA Avantages</strong> ou être <strong>licencié </strong>par l'AS.
          </p>
        </div>

              
        <div className='ad-title'>
          Abonnement normal
        </div>
        <div className='ad-container'>
          <p style={{ fontSize: '16px' }}>
            Cet abonnement vous permet de <strong>nager autant de fois</strong> que vous le souhaitez pendant un semestre entier. <br />
          </p>
        </div>




        <div className='ad-title'>
          Bonnet INSAQUATIC
        </div>
        <div className='ad-container'>
          <p style={{ fontSize: '16px' }}>
            Découvrez notre <strong>Bonnet de bain</strong>  ———  Championnat Edition Limitée !
          </p>
        </div>
        <ListAdhesion />

        

      </div>
      <Infobar />
    </div>
  );
}


export default Adhesion;



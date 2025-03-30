import React from 'react';
import Navbar from '../Navbar';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      {/* <img src="/eau2.jpg" alt="Fond Eau" className="background-image" /> */}
      <div className="page">
        <h1 className="title">
          INSAQUATIC
          <h1 className="description">
            Association de natation de l'INSA Lyon
          </h1>
        </h1>
      </div>
      <div className='page'>
        <h1 className="description">Qui sommes-nous ?</h1>
        <img src="/groupe.png" alt="Groupe" className="imageGroupe" />
      </div>
    </div>
  );
}

export default Home;
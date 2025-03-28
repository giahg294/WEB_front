import React from 'react';
import Navbar from '../Navbar';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      {/* <img src="/eau2.jpg" alt="Fond Eau" className="background-image" /> */}
      <div className="homepage">
        <h1 className="hometitle">
          INSAQUATIC
          <h1 className="titledescription">
            Association de natation de l'INSA Lyon
          </h1>
        </h1>
        <h2>
          
        </h2>
      </div>
    </div>
  );
}

export default Home;
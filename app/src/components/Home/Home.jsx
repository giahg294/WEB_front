import React from 'react';
import Navbar from '../Navbar';
import ImageCarousel from './Images';
import Apropos from './Apropos';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="page">
        <h1 className="title">
          INSAQUATIC
          <h1 className="description">
            Association de natation de l'INSA Lyon
          </h1>
        </h1>
        <ImageCarousel />
      </div>
      <div className='page'>
        <Apropos />
      </div>
    </div>
  );
}

export default Home;
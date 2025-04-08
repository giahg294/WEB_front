import React from 'react';
import Navbar from '../Navbar';
import ImageCarousel from './Images';
import Apropos from './Apropos';
import './Home.css';
import Infobar from '../Infobar';
import Partenaires from './Partenaires';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="pageHome">
        <h1 className="title">
          INSAQUATIC
          <h1 className="description">
            Association de natation de l'INSA Lyon
          </h1>
        </h1>
        <ImageCarousel />
      </div>
      <div className='pageHome'>
        <Partenaires />
        <Apropos />
      </div>
      <Infobar />
    </div>
  );
}

export default Home;
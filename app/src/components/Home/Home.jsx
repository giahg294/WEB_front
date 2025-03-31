import React from 'react';
import Navbar from '../Navbar';
import ImageCarousel from './Images';
import Apropos from './Apropos';
import './Home.css';
import Infobar from '../Infobar';

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
        <Apropos />
      </div>
      <Infobar />
    </div>
  );
}

export default Home;
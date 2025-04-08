import React from 'react';
import './Partenaires.css';

function Partenaires() {
  return (
    <div className="partenaires">
      <h2 className="partenaires-title">
        Ils nous ont fait <span className="bold">confiance</span>
      </h2>
      <div className="partenaires-logos">
        <img src="/logo_INSA.png" alt="INSA" />
        <img src="/logo_redbull.png" alt="Red Bull" />
      </div>
    </div>
  );
}

export default Partenaires;

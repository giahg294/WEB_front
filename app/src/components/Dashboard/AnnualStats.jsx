import React from "react";
import "./AnnualStats.css"
import Sidebar from "./Sidebar"
import Statsgraphe from "./Statsgraphe"; 

function AnnualStats() {
  return (
    <div className="page">
      <Sidebar/>
      <div className="titre">
      </div>
      <div className="contenu">
        <Statsgraphe />
      </div>
    </div>
  );
}

export default AnnualStats;
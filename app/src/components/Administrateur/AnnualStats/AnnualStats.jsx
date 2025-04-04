import React from "react";
import "./AnnualStats.css";
import Sidebar from "../Sidebar";
import Statsgraphe from "./Statsgraphe"; 

function AnnualStats() {
  return (
    <div className="ad-page">
      <Sidebar/>
      <div className="ad-contenu">
        <Statsgraphe />
      </div>
    </div>
  );
}

export default AnnualStats;
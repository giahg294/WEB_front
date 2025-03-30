import React from "react";
import "./AnnualStats.css"
import Sidebar from "./Sidebar"

function AnnualStats() {
  return (
    <div className="page">
      <Sidebar/>
      <div className="titre">
        Statistiques annuelles
      </div>
      <div className="contenu">
        Contenu statistique
      </div>
    </div>
  );
}

export default AnnualStats;
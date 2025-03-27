import React from "react";
import Sidebar from "../Sidebar"

function AnnualStats() {
  return (
    <div className="p-8">
      <Sidebar/>
      <h1 className="text-2xl font-semibold mb-4">Statistiques annuelles</h1>
      <p className="text-lg text-gray-700">
        Cette page affichera les statistiques annuelles (à implémenter).
      </p>
    </div>
  );
}

export default AnnualStats;
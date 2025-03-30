import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="Sidebar">
      <h1 className="Logo">
        <img src="/insaquatic.svg" alt="Logo INSAQUATIC" className="logo" />
      </h1>
      <nav>
        <ul>
          <li className="menu">
            <Link
              to="/admin/annual"
              className="items"
            >
              <img src="/maison.png" alt="home" className="icon" />
              Statistiques annuelles
            </Link>
            <Link
              to="/admin/seance"
              className="items"
            >
              <img src="/stat.png" alt="stat" className="icon" />
              Statistiques par séances
            </Link>
            <Link
              to="/admin/paiements"
              className="items"
            >
              <img src="/paiement.png" alt="money" className="icon" />
              Paiements
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
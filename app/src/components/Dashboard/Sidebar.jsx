import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation(); // Récupère l'URL actuelle
  
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
              className={`items ${location.pathname === "/admin/annual" ? "active" : ""}`}
            >
              <img src="/maison.png" alt="home" className="icon" />
              Statistiques annuelles
            </Link>
            <Link
              to="/admin/seance"
              className={`items ${location.pathname === "/admin/seance" ? "active" : ""}`}
            >
              <img src="/stat.png" alt="stat" className="icon" />
              Séances
            </Link>
            <Link
              to="/admin/paiements"
              className={`items ${location.pathname === "/admin/paiements" ? "active" : ""}`}
            >
              <img src="/paiement.png" alt="money" className="icon" />
              Paiements
            </Link>
            <Link
              to="/admin/abonnements"
              className={`items ${location.pathname === "/admin/abonnements" ? "active" : ""}`}
            >
              <img src="/paiement.png" alt="money" className="icon" />
              Abonnements
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
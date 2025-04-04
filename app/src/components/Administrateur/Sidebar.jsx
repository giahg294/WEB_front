import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation(); // Récupère l'URL actuelle
  
  return (
    <div className="Sidebar">
      <h1 className="Logo">
        <img src="/insaquatic/insaquatic.svg" alt="Logo INSAQUATIC" className="logo" />
      </h1>
      <nav>
        <ul>
          <li className="menu">
          <Link
              to="/admin/annual"
              className={`items ${location.pathname === "/admin/annual" ? "active" : ""}`}
            >
              <img src="/icons/home.svg" alt="home" className="icon" />
              Statistiques annuelles
            </Link>
            <Link
              to="/admin/seance"
              className={`items ${location.pathname === "/admin/seance" ? "active" : ""}`}
            >
              <img src="/icons/stats.svg" alt="stat" className="icon" />
              Séances
            </Link>
            <Link
              to="/admin/paiements"
              className={`items ${location.pathname === "/admin/paiements" ? "active" : ""}`}
            >
              <img src="/icons/money.svg" alt="money" className="icon" />
              Paiements
            </Link>
            <Link
              to="/admin/abonnements"
              className={`items ${location.pathname === "/admin/abonnements" ? "active" : ""}`}
            >
              <img src="/icons/etoile.svg" alt="money" className="icon" />
              Abonnements
            </Link>
            <Link
              to="/admin/illegaux"
              className={`items ${location.pathname === "/admin/illegaux" ? "active" : ""}`}
            >
              <img src="/icons/sick.svg" alt="money" className="icon" />
              Illegaux
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
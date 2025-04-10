import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation(); // Récupère l'URL actuelle
  const disconnect = () => {
    localStorage.removeItem("access_token");
    document.cookie =
      "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax";
  };
  return (
    <div className="Sidebar">
      <h1 className="Logo">
        <img
          src="/insaquatic/insaquatic.svg"
          alt="Logo INSAQUATIC"
          className="logo"
        />
      </h1>
      <div className="all-menu">
        <nav>
          <ul>
            <li className="menu">
              <Link
                to="/admin/annual"
                className={`items ${
                  location.pathname === "/admin/annual" ? "active" : ""
                }`}
              >
                <img src="/icons/home.svg" alt="home" className="icon" />
                Statistiques annuelles
              </Link>
              <Link
                to="/admin/seance"
                className={`items ${
                  location.pathname === "/admin/seance" ? "active" : ""
                }`}
              >
                <img src="/icons/stats.svg" alt="stat" className="icon" />
                Séances
              </Link>
              <Link
                to="/admin/paiements"
                className={`items ${
                  location.pathname === "/admin/paiements" ? "active" : ""
                }`}
              >
                <img src="/icons/money.svg" alt="money" className="icon" />
                Paiements
              </Link>
              <Link
                to="/admin/listadhesions"
                className={`items ${
                  location.pathname === "/admin/listadhesions" ? "active" : ""
                }`}
              >
                <img src="/icons/etoile.svg" alt="money" className="icon" />
                Adhesions
              </Link>
              <Link
                to="/admin/abonnements"
                className={`items ${
                  location.pathname === "/admin/abonnements" ? "active" : ""
                }`}
              >
                <img
                  src="/icons/double_star.svg"
                  alt="money"
                  className="icon"
                />
                Abonnements
              </Link>
              <Link
                to="/admin/illegaux"
                className={`items ${
                  location.pathname === "/admin/illegaux" ? "active" : ""
                }`}
              >
                <img src="/icons/sick.svg" alt="money" className="icon" />
                Hors la loi
              </Link>
            </li>
          </ul>
        </nav>
        <div className="logout">
          <Link to="/" className="items" onClick={() => disconnect()}>
            <img src="/icons/logout.svg" alt="logout" className="icon" />
            Déconnexion
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Auth.css";
import Login from "./Login.jsx";

function Auth() {
  return (
    <div className = "auth-page">
      <nav>
        <ul>
          <li>
            <Link to = "/admin/annual">
              Tentative de connexion
            </Link>
          </li>
        </ul>
      </nav>
      <Login />
    </div>
  );
}

export default Auth;

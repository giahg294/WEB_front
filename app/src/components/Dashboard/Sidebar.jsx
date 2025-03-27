import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-blue-800 text-white h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              to="/admin/seance"
              className="block py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Statistiques par séance
            </Link>
          </li>
          <li>
            <Link
              to="/admin/annual"
              className="block py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Statistiques annuelles
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
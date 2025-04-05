import React from "react";
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Adhesion from "./components/Adhesion/Adhesion";
import Evenements from "./components/Events/Evenements";
import Auth from "./components/Authentification/Auth";
import Paiement from "./components/Administrateur/Paiement/Paiement";
import AnnualStats from "./components/Administrateur/AnnualStats/AnnualStats";
import SeanceStats from "./components/Administrateur/Seances/SeanceStats";
import AbonnementPage from "./components/Administrateur/Abonnements/Abonnements";
import IllegauxPage from "./components/Administrateur/Illegaux/Illegaux";
import ProtectedRoute from "./components/Authentification/ProtectedRoute";


function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adhesion" element={<Adhesion />} />
        <Route path="/events" element={<Evenements />} />
        <Route path="/admin" element={<Auth />} />
        <Route 
          path="/admin/annual" 
          element={
            <ProtectedRoute>
              <AnnualStats />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/seance" 
          element={
            <ProtectedRoute>
              <SeanceStats />
            </ProtectedRoute>
          } 
        />
        <Route 
        path="/admin/paiements" 
        element={
          <ProtectedRoute>
            <Paiement />
          </ProtectedRoute>
        } 
      />
        <Route path="/admin/abonnements" element={<AbonnementPage />} />
        <Route path="/admin/illegaux" element={<IllegauxPage />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
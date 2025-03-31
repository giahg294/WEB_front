import React from "react";
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Adhesion from "./components/Adhesion/Adhesion";
import Evenements from "./components/Events/Evenements";
import Auth from "./components/Authentification/Auth";
import Paiement from "./components/Paiement";
import AnnualStats from "./components/Dashboard/AnnualStats";
import SeanceStats from "./components/Dashboard/SeanceStats";


function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adhesion" element={<Adhesion />} />
        <Route path="/events" element={<Evenements />} />
        <Route path="/admin" element={<Auth />} />
        <Route path="/admin/annual" element={<AnnualStats />} />
        <Route path="/admin/seance" element={<SeanceStats />} />
        <Route path="/admin/paiements" element={<Paiement />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
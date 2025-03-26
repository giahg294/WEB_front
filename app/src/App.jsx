import React from "react";
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Adhesion from "./components/pages/Adhesion";
import Evenements from "./components/pages/Evenements";
import AnnualStats from "./components/pages/AnnualStats";
import SeanceStats from "./components/pages/SeanceStats";
import Paiement from "./components/pages/Paiement";

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adhesion" element={<Adhesion />} />
        <Route path="/events" element={<Evenements />} />
        <Route path="/admin/annual" element={<AnnualStats />} />
        <Route path="/admin/seance" element={<SeanceStats />} />
        <Route path="/admin/paiement" element={<Paiement />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
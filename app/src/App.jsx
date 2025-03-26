import React from "react";
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Adhesion from "./components/pages/Adhesion";
import Evenements from "./components/pages/Evenements";
import Auth from "./components/pages/Auth";
import AnnualStats from "./components/pages/AnnualStats";
import SeanceStats from "./components/pages/SeanceStats";

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
        <Route path="/admin/seances" element={<SeanceStats />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
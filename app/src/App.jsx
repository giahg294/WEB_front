import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SeanceStats from "./pages/SeanceStats";
import AnnualStats from "./pages/AnnualStats";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<SeanceStats />} />
            <Route path="/annual" element={<AnnualStats />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
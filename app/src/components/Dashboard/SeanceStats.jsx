import React, { useState } from "react";
import moment from "moment";
import Seance from "./Seance";
import Sidebar from "./Sidebar";
import EventsComponent from "./RecupData";
import MyButton from "./MyButton"; // Assurez-vous d'importer le bon fichier
import "./SeanceStats.css";

const creneaux = {
  "Semestre 1": ["2024-09-01T15:00:00", "2024-10-01T15:00:00", "2024-11-01T15:00:00", "2024-12-01T15:00:00", "2025-01-01T15:00:00", "2025-02-01T15:00:00"],
  "Semestre 2": ["2025-03-01T15:00:00", "2025-04-01T15:00:00", "2025-05-01T15:00:00", "2025-06-01T15:00:00", "2025-07-01T15:00:00", "2025-08-01T15:00:00"]
};

function SeanceStats() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="ad-page">
      <Sidebar />
      <div className="ad-contenu">
        <div className="boxes">
        {/* Semestre 1 */}
        <div className="ad-box">
          <h1 className="ad-titre">Semestre 1</h1>
          <div className="ad-items-container">
          {creneaux["Semestre 1"].map((date) => (
            <div key={date} className="ad-items">
              <MyButton
                ButtonText={moment(date).format("DD MMMM YYYY")}
                onClick={() => setSelectedDate(date)}
                className={selectedDate === date ? "active" : ""}
              />
            </div>
          ))}
          </div>
        </div>

        {/* Semestre 2 */}
        <div className="ad-box">
          <h1 className="ad-titre">Semestre 2</h1>
          <div className="ad-items-container">
          {creneaux["Semestre 2"].map((date) => (
            <div key={date} className="ad-items">
              <MyButton
                ButtonText={moment(date).format("DD MMMM YYYY")}
                onClick={() => setSelectedDate(date)}
                className={selectedDate === date ? "active" : ""}
              />
            </div>
          ))}
          </div>
        </div>
      </div>

        {selectedDate && (
          <div className="ad-data">
            <Seance date={moment(selectedDate).format("DD MMMM YYYY")} />
          </div>
        )}
      </div>
      <EventsComponent />
    </div>
  );
}

export default SeanceStats;

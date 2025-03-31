import React, { useState } from "react";
import moment from 'moment';
import Seance from "./Seance";
import Sidebar from "./Sidebar";
import "./SeanceStats.css"

function MyButton({ ButtonText, onClick }) {
  return (
    <button
      onClick={onClick}
      className="button"
    >
      {ButtonText}
    </button>
  );
}

const creneaux = {
  "Semestre 1": ["2024-09-01T15:00:00", "2024-10-01T15:00:00", "2024-11-01T15:00:00","2024-12-01T15:00:00", "2025-01-01T15:00:00", "2025-02-01T15:00:00"],
  "Semestre 2": ["2025-03-01T15:00:00", "2025-04-01T15:00:00", "2025-05-01T15:00:00","2025-06-01T15:00:00", "2025-07-01T15:00:00", "2025-08-01T15:00:00"]
};

function formatDate(date) {
  return moment(date).format('DD MMMM YYYY');
}

function SeanceStats() {
  const [selectedDate, setSelectedDate] = useState(null);
  
  const [seancesData, setSeancesData] = useState(
    Object.values(creneaux).flat().reduce((acc, date) => {
      acc[date] = {
        entreeTN: 0,
        entreeTR: 0,
        abonnementTN: 0,
        abonnementTR: 0
      };
      return acc;
    }, {})
  );

  const updateValue = (date, key, newValue) => {
    setSeancesData(prev => ({
      ...prev,
      [date]: { ...prev[date], [key]: Math.max(newValue, 0) }
    }));
  };

  return (
    <div className="pageadmin">
      {/* Sidebar */}
        <Sidebar />
      {/* Contenu principal */}
      <div className="contenu">
          {/* Semestre 1 */}
          <div className="box">
            <h1 className="titre">Semestre 1</h1>
            {creneaux["Semestre 1"].map((date) => (
              <div key={date} className="items">
                <MyButton
                  ButtonText={moment(date).format("DD MMMM YYYY")}
                  onClick={() => setSelectedDate(date)}
                />
              </div>
            ))}
          </div>

          {/* Semestre 2 */}
          <div className="box">
            <h1 className="titre">Semestre 2</h1>
            {creneaux["Semestre 2"].map((date) => (
              <div key={date} className="items">
                <MyButton
                  ButtonText={moment(date).format("DD MMMM YYYY")}
                  onClick={() => setSelectedDate(date)}
                />
              </div>
            ))}
          </div>

        {selectedDate && (
          <div className="data">
            <Seance
              date={formatDate(selectedDate)}
              {...seancesData[selectedDate]}
              onUpdate={(key, val) => updateValue(selectedDate, key, val)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SeanceStats;

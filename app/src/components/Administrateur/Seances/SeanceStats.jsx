import React, { useState, useEffect } from "react";
import moment from "moment";
import Seance from "./Seance";
import Sidebar from "../Sidebar";
import EventDates from "./RecupDates";
import ParticipantsByEvent from "./RecupParticipants";
import "./SeanceStats.css";

function MyButton({ ButtonText, onClick }) {
  return (
    <button onClick={onClick} className="ad-button">
      {ButtonText}
    </button>
  );
}

function SeanceStats() {
  const listeDates = EventDates("dates");
  const semester1Dates = listeDates.filter(date => moment(date).isBefore("2025-02-08"));
  const semester2Dates = listeDates.filter(date => moment(date).isSameOrAfter("2025-02-08"));

  const [selectedDate, setSelectedDate] = useState(null);
  const [seancesData, setSeancesData] = useState({});

  useEffect(() => {
    if (listeDates.length > 0) {
      const newSeancesData = listeDates.reduce((acc, date) => {
        acc[date] = {
          entreeTN: 0,
          entreeTR: 0,
        };
        return acc;
      }, {});
      setSeancesData(newSeancesData);
    }
  }, [listeDates]);

  // Récupération des participants pour l'événement sélectionné
  const participants = ParticipantsByEvent(selectedDate);

  useEffect(() => {
    if (participants && selectedDate) {
      setSeancesData(prev => ({
        ...prev,
        [selectedDate]: {
          entreeTN: participants["pistoche-Tarif-Normal"] || 0,
          entreeTR: participants["pistoche-Tarif-Reduit"] || 0,
        }
      }));
    }
  }, [participants, selectedDate]);

  const updateValue = (date, key, newValue) => {
    setSeancesData(prev => ({
      ...prev,
      [date]: { ...prev[date], [key]: Math.max(newValue, 0) }
    }));
  };

  return (
    <div className="ad-page">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Contenu principal */}
      <div className="ad-contenu">
        <div className="semestre">
          {/* Semestre 1 */}
          <div className="ad-box">
            <h1 className="ad-titre">Semestre 1</h1>
            {semester1Dates.length > 0 &&
              semester1Dates.map((date) => (
                <div key={date} className="ad-items">
                  <MyButton
                    ButtonText={moment(date).format("DD MMMM YYYY")}
                    onClick={() => setSelectedDate(date)}
                  />
                </div>
              ))}
          </div>

          {/* Semestre 2 */}
          <div className="ad-box">
            <h1 className="ad-titre">Semestre 2</h1>
            {semester2Dates.length > 0 &&
              semester2Dates.map((date) => (
                <div key={date} className="ad-items">
                  <MyButton
                    ButtonText={moment(date).format("DD MMMM YYYY")}
                    onClick={() => setSelectedDate(date)}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Détails de la séance sélectionnée */}
        {selectedDate && (
          <div className="ad-data">
            <Seance
              date={moment(selectedDate).format("DD MMMM YYYY")}
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

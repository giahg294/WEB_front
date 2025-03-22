import React, { useState } from "react";
import moment from 'moment';
import MyButton from "./MyButton";
import Seance from "./Seance";

const creneaux = {
  "Semestre 1": ["2024-09-01T15:00:00", "2024-10-01T15:00:00", "2024-11-01T15:00:00"],
  "Semestre 2": ["2025-03-01T15:00:00", "2025-04-01T15:00:00", "2025-05-01T15:00:00"]
};

// Fonction pour formater la date
function formatDate(date) {
  return moment(date).format('DD MMMM YYYY');
}

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  
  const [seancesData, setSeancesData] = useState(
    Object.values(creneaux).flat().reduce((acc, date) => {
      acc[date] = {
        participants: 0,
        participantsAvtg: 0,
        bonnetsVendus: 0,
      };
      return acc;
    }, {})
  );

  const updateParticipants = (date, newValue) => {
    setSeancesData(prev => ({
      ...prev,
      [date]: { ...prev[date], participants: newValue }
    }));
  };

  const updateParticipantsAvtg = (date, newValue) => {
    setSeancesData(prev => ({
      ...prev,
      [date]: { ...prev[date], participantsAvtg: newValue }
    }));
  };

  const updateBonnets = (date, newValue) => {
    setSeancesData(prev => ({
      ...prev,
      [date]: { ...prev[date], bonnetsVendus: newValue }
    }));
  };

  return (
    <div className="p-8">
      {/* Conteneur principal pour les deux colonnes */}
      <div className="flex justify-between">
        {/* Semestre 1 */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4 text-blue-600">Semestre 1</h1>
          {creneaux["Semestre 1"].map((date) => (
            <div key={date} className="mb-4">
              <MyButton
                ButtonText={moment(date).format("DD MMMM YYYY")}
                onClick={() => setSelectedDate(date)}
              />
            </div>
          ))}
        </div>

        {/* Semestre 2 */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4 text-green-600">Semestre 2</h1>
          {creneaux["Semestre 2"].map((date) => (
            <div key={date} className="mb-4">
              <MyButton
                ButtonText={moment(date).format("DD MMMM YYYY")}
                onClick={() => setSelectedDate(date)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section pour afficher la séance sélectionnée */}
      {selectedDate && (
        <div className="mt-8 border-t-2 pt-8">
          <Seance
            date={formatDate(selectedDate)}
            participants={seancesData[selectedDate].participants}
            participantsAvtg={seancesData[selectedDate].participantsAvtg}
            bonnetsVendus={seancesData[selectedDate].bonnetsVendus}
            onUpdateParticipants={(newVal) => updateParticipants(selectedDate, newVal)}
            onUpdateParticipantsAvtg={(newVal) => updateParticipantsAvtg(selectedDate, newVal)}
            onUpdateBonnets={(newVal) => updateBonnets(selectedDate, newVal)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
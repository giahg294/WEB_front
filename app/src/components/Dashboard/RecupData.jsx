import React, { useEffect, useState } from "react";

const EventsComponent = () => {
  const [events, setEvents] = useState([]); // Stocke les événements sous forme de tableau

  useEffect(() => {
    fetch("http://localhost:4000/stats/getEvent")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des événements");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setEvents(data); // Met à jour l'état avec les événements reçus
      })
      .catch((error) => console.error("Erreur:", error));
  }, []); // Exécuté une seule fois au montage

  return (
    <div>
      <h1>Liste des événements</h1>
      {events.length > 0 ? (
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.nom}</strong> - {event.date} <br />
              <a href={event.url} target="_blank" rel="noopener noreferrer">
                Voir l'événement
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun événement disponible.</p>
      )}
    </div>
  );
};

export default EventsComponent;

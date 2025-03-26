import React, { useEffect, useState } from 'react';

function ListEvents() {
  const [events, setEvents] = useState([]);

  // Récupération du JSON
  useEffect(() => {
    fetch('/response.json')
      .then((response) => response.json())
      .then((data) => setEvents(data.data))
      .catch((error) => console.error('Erreur de chargement:', error));
  }, []);

  return (
    <div className="events-container">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h3>{event.nom}</h3>
          <a href={event.url} target="_blank" rel="noopener noreferrer">
            <button>Je participe !</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ListEvents;
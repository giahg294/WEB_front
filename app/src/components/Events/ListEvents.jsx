import React, { useEffect, useState } from 'react';
import back_port from '../../connexion';

function ListEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(back_port() + '/stats/getEvent')
      .then((response) => response.json())
      .then((data) => setEvents(data || []))
      .catch((error) => console.error('Erreur de chargement:', error));
  }, []);

  // Regrouper les événements par date
  const groupedByDate = events.reduce((acc, event) => {
    const dateKey = new Date(event.date).toLocaleDateString('fr-FR');
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(event);
    return acc;
  }, {});

  return (
    <div className="events-container">
      {Object.entries(groupedByDate).map(([date, eventsForDate], index) => (
        <div key={index} className="date-group">
          <h2>{date}</h2>
          <div className="event-list">
            {eventsForDate.map((event, i) => (
              <div key={i} className="event-card">
                <h3>{event.nom}</h3>
                {event.participantsMax !== null ? (
                  <p>
                    {event.participants}/{event.participantsMax}
                  </p>
                ) : (
                  <p>
                    {event.participants}/illimités
                  </p>
                )}
                {event.participants < event.participantsMax || event.participantsMax === null ? (
                  <a href={event.url} target="_blank" rel="noopener noreferrer">
                    <button>Je participe !</button>
                  </a>
                ) : (
                  <div>Plus de places</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListEvents;

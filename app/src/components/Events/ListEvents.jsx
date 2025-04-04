import React, { useEffect, useState } from 'react';
import back_port from '../../connexion';

function ListEvents() {
  const [events, setEvents] = useState([]);

  // Récupération du JSON
  useEffect(() => {
    fetch(back_port()+'/stats/getEvent')
      .then((response) => response.json())
      .then((data) => setEvents(data || []))
      .catch((error) => console.error('Erreur de chargement:', error));
  }, []);

  return (
    <div className="events-container">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <h1>{event.nom}</h1>
          {event.participantsMax !== null ? (
            <h2>
              {event.participants}/{event.participantsMax}
            </h2>
          ) : (
            <h2>
              {event.participants}/illimités
            </h2>
          )}

          {event.participants < event.participantsMax || event.participantsMax === null ?(
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              <button>Je participe !</button>
            </a>
          ) : (
            <div>Plus de places</div>
          )
          }
          
        </div>
      ))}
    </div>
  );
}

export default ListEvents;
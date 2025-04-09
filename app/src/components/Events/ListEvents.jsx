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

  // Trier les dates dans l'ordre croissant
  const sortedGroupedEntries = Object.entries(groupedByDate).sort(
    ([dateA], [dateB]) =>
      new Date(dateA.split('/').reverse().join('-')) - new Date(dateB.split('/').reverse().join('-'))
  );

  return (
    <div className="events-container">
      {sortedGroupedEntries.map(([date, eventsForDate], index) => (
        <div key={index} className="date-group">
          <h2>{date} - soirée pistoche</h2>
          <div className="event-list">
            {eventsForDate.map((event, i) => {
              const isTarifReduit = event.nom.toLowerCase().includes("réduit");
              return (
                <div key={i} className="event-card">
                  <h3>{isTarifReduit ? 'Tarif réduit' : 'Tarif normal'}</h3>
                  <p>
                    {event.participants}/{event.participantsMax ?? 'illimités'}
                  </p>
                  {event.participants < event.participantsMax || event.participantsMax === null ? (
                    <a href={event.url} target="_blank" rel="noopener noreferrer">
                      <button>Je participe !</button>
                    </a>
                  ) : (
                    <div>Plus de places</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListEvents;

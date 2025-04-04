import React, { useEffect, useState } from 'react';
import back_port from '../../connexion';

function ListAdhesion() {
  const [events, setEvents] = useState([]);

  // Récupération du JSON
  useEffect(() => {
    fetch(back_port()+'/stats/getAdhesion')
      .then((response) => response.json())
      .then((data) => setEvents(data || []))
      .catch((error) => console.error('Erreur de chargement:', error));
  }, []);

  return (
    <div className="ad-container">
      {events.map((event, index) => (
        <div key={index} className="adhesion">
          <div className='ad-title'>
          {event.nom}
          </div>

          <p className="description-text">{event.descript}</p>
          <a href={event.url} target="_blank" rel="noopener noreferrer">
            <button>Acheter </button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ListAdhesion;

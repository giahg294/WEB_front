import React, { useEffect, useState } from 'react';

function ListAdhesion() {
  const [events, setEvents] = useState([]);

  // Récupération du JSON
  useEffect(() => {
    fetch('/response_adhesion')
      .then((response) => response.json())
      .then((data) => setEvents(data.data))
      .catch((error) => console.error('Erreur de chargement:', error));
  }, []);
  
  return (
    <div className="ad-container">
      {events.map((event, index) => (
        <div key={index} className="adhesion">
          <h1>{event.nom}</h1>
          <a href={event.url} target="_blank" rel="noopener noreferrer">
            <button>Acheter </button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ListAdhesion;

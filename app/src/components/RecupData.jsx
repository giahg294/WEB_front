import { useState, useEffect } from "react";

const EventDates = ({ consigne }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/stats/getEvent")
      .then((response) => response.json())
      .then((data) => {
        if (data?.data) {
          setEvents(data); 
        }
      })
      .catch((error) => console.error("Erreur de chargement:", error));
  }, []);

  if (consigne === "dates") {
    return events.map(event => event.date);
  }

  if (consigne === "event-card") {
    return events; 
  }

  return null; 
};

export default EventDates;

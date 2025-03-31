import { useEffect, useState } from "react";

const EventDates = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/stats/getEvent")
      .then((response) => response.json())
      .then((data) => setDates(data.map(event => event.date)))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return dates;
};

export default EventDates;
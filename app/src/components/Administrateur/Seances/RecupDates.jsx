import { useEffect, useState } from "react";
import back_port from "../../../connexion";

const EventDates = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch(back_port()+"/stats/getEvent")
      .then((response) => response.json())
      .then((data) => setDates(data.map(event => event.date)))
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return dates;
};

export default EventDates;


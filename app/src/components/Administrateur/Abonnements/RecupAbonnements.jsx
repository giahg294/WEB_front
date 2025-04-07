import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const useAbonnements = () => {
  const [abonnements, setAbonnements] = useState([]);

  useEffect(() => {
    fetch(back_port() + "/stats/getAbonnement")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const formattedData = data.flatMap(item =>
            item.participants.map(participant => ({
              prenom: participant.prenom,
              nom: participant.nom,
              nom_event: item.nom
            }))
          );
          setAbonnements(formattedData);
        }
      })
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return abonnements;
};

export default useAbonnements;

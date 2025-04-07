import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const useAdhesions = () => {
  const [adhesions, setAdhesions] = useState([]);

  useEffect(() => {
    fetch(back_port() + "/stats/getAdhesionMembers")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const formattedData = data.map(item => ({
            prenom: item.userPrenom,
            nom: item.userNom,
            mail: item.userEmail
          }));
          setAdhesions(formattedData);
        }
      })
      .catch((error) => console.error("Erreur:", error));
  }, []);

  return adhesions;
};

export default useAdhesions;

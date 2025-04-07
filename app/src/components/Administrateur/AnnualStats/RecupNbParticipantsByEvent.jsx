import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const useParticipantsByEvent = () => {
    const [nbParticipants, setNbParticipants] = useState([]);

    useEffect(() => {
        fetch(back_port()+"/stats/getParticipanByEvent")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    const formattedData = data.map((item, index) => ({
                        seance: `Séance ${index + 1}`,
                        Participants: item.totalmembers
                    }));
                    setNbParticipants(formattedData);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, []);

    return nbParticipants;
};

export default useParticipantsByEvent;

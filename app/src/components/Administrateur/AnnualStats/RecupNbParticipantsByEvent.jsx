import { useState, useEffect } from "react";

const ParticipantsByEvent = () => {
    const [nbParticipants, setNbParticipants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/stats/getParticipanByEvent")
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

export default ParticipantsByEvent;

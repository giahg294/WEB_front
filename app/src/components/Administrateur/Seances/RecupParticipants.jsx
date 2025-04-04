import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const ParticipantsByEvent = (selectedDate) => {
    const [nbParticipants, setNbParticipants] = useState({
        "pistoche-TR": 0,
        "pistoche-Normal": 0,
        "pistoche-Abo-Normal": 0,
        "pistoche-Abo-TR": 0
    });

    useEffect(() => {
        if (!selectedDate) return; // Ne fait rien si aucune date sélectionnée

        fetch(back_port()+"/stats/getParticipantsDetailsByEvent")
            .then((response) => response.json())
            .then((data) => {
                const eventData = data.find(event => event.date === selectedDate);
                if (eventData) {
                    const newData = {
                        "pistoche-TR": eventData.eventDetails.find(e => e.slug === "pistoche-TR")?.nbrParticipants || 0,
                        "pistoche-Normal": eventData.eventDetails.find(e => e.slug === "pistoche-Normal")?.nbrParticipants || 0,
                        "pistoche-Abo-Normal": eventData.eventDetails.find(e => e.slug === "pistoche-Abo-Normal")?.nbrParticipants || 0,
                        "pistoche-Abo-TR": eventData.eventDetails.find(e => e.slug === "pistoche-Abo-TR")?.nbrParticipants || 0
                    };
                    setNbParticipants(newData);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, [selectedDate]); // Requête seulement si `selectedDate` change

    return nbParticipants;
};

export default ParticipantsByEvent;

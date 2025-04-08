import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const ParticipantsByEvent = (selectedDate) => {
    const [nbParticipants, setNbParticipants] = useState({
        "pistoche-Tarif-Reduit" : 0,
        "pistoche-Tarif-Normal" : 0
    });

    useEffect(() => {
        if (!selectedDate) return; // Ne fait rien si aucune date sélectionnée

        fetch(back_port()+"/stats/getParticipantsDetailsByEvent")
            .then((response) => response.json())
            .then((data) => {
                const eventData = data.find(event => event.date === selectedDate);
                if (eventData) {
                    const newData = {
                        "pistoche-Tarif-Reduit": eventData.eventDetails.find(e => e.slug === "soire-pistoche-tarif-reduit")?.nbrParticipants || 0,
                        "pistoche-Tarif-Normal": eventData.eventDetails.find(e => e.slug === "soire-pistoche-tarif-normal")?.nbrParticipants || 0
                    };
                    setNbParticipants(newData);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, [selectedDate]); // Requête seulement si `selectedDate` change

    return nbParticipants;
};

export default ParticipantsByEvent;

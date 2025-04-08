import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const ParticipantsByEvent = (selectedDate) => {
    const [nbParticipants, setNbParticipants] = useState({
        "soirée pistoche tarif réduit" : 0,
        "soirée pistoche tarif normal" : 0
    });

    useEffect(() => {
        if (!selectedDate) return; // Ne fait rien si aucune date sélectionnée

        fetch(back_port()+"/stats/getParticipantsDetailsByEvent")
            .then((response) => response.json())
            .then((data) => {
                const eventData = data.find(event => event.date === selectedDate);
                if (eventData) {
                    const newData = {
                        "soirée pistoche tarif réduit": eventData.eventDetails.find(e => e.nom === "soirée pistoche tarif réduit")?.nbrParticipants || 0,
                        "soirée pistoche tarif normal": eventData.eventDetails.find(e => e.nom === "soirée pistoche tarif normal")?.nbrParticipants || 0
                    };
                    setNbParticipants(newData);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, [selectedDate]); // Requête seulement si `selectedDate` change

    return nbParticipants;
};

export default ParticipantsByEvent;

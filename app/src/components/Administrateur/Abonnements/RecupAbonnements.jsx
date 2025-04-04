import { useState, useEffect } from "react";

const Abonnement = () => {
    const [listeAbonnements, setListeAbonnements] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/stats/getAbonnement")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    const formattedData = data.map(item => ({
                        nom_evenement: item.nom,  
                        abonnementUrl: item.abonnementUrl,  
                        listeParticipants: item.participants
                    }));
                    setListeAbonnements(formattedData);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, []);

    return listeAbonnements;
};

export default Abonnement;


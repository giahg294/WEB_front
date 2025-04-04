import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const Abonnement = () => {
    const [listeAbonnements, setListeAbonnements] = useState([]);

    useEffect(() => {
        fetch(back_port()+"/stats/getPayment")
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


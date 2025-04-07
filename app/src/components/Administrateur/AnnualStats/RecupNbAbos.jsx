import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const useNbAbos = () => {
    const [nbAbosTR, setNbAbosTR] = useState(0);
    const [nbAbosTN, setNbAbosTN] = useState(0);

    useEffect(() => {
        fetch(back_port() + "/stats/getAbonnement")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    data.forEach(item => {
                        if (item.nom === "abonnement tarif reduit") {
                            setNbAbosTR(item.participants.length);
                        } else if (item.nom === "abonnement tarif normal") {
                            setNbAbosTN(item.participants.length);
                        }
                    });
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, []);

    return { nbAbosTR, nbAbosTN };
};

export default useNbAbos;

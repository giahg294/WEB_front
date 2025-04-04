import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const TimeBasedAdhesion = () => {
    const [nbAdhesions, setNbAdhesions] = useState([]);

    useEffect(() => {
        fetch(back_port()+"/stats/getTimeBasedAdhesionPayment")
            .then((response) => response.json())
            .then((data) => {
                if (data.growthData) {
                    const formattedData = data.growthData.map(item => ({
                        date: item.x,
                        NombreAdhesions: item.y
                    }));
                    setNbAdhesions(formattedData);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, []);

    return nbAdhesions;
};

export default TimeBasedAdhesion;

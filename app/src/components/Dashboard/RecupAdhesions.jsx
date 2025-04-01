import { useState, useEffect } from "react";

const TimeBasedAdhesion = () => {
    const [nbAdhesions, setNbAdhesions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/stats/getTimeBasedAdhesionPayment")
            .then((response) => response.json())
            .then((data) => {
                if (data.growthData) {
                    const formattedData = data.growthData.map(item => ({
                        date: item.x,
                        nombre: item.y
                    }));
                    setNbAdhesions(formattedData);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, []);

    return nbAdhesions;
};

export default TimeBasedAdhesion;

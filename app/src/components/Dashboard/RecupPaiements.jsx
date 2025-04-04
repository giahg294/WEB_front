import { useState, useEffect } from "react";

const Paiements = () => {
    const [listePaiements, setListePaiements] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/stats/getPayment")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    const formattedData = data.map(item => ({
                        nom: item.nom,  
                        email: item.email,  
                        type: item.type,  
                        prix: `€${parseFloat(item.amount).toFixed(2)}`,  
                        paydate: new Date(item.createdAt).toLocaleDateString("fr-FR"),  
                    }));
                    setListePaiements(formattedData);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, []);

    return listePaiements;
};

export default Paiements;


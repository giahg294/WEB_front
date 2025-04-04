import { useState, useEffect } from "react";

const Illegaux = () => {
    const [listeIllegaux, setIllegaux] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/stats/getIllegaux")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    const formattedData = data.map(item => ({
                        prenom: item.prenom,
                        nom: item.nom,  
                        email: item.email
                    }));
                    setIllegaux(formattedData);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, []);

    return listeIllegaux;
};

export default Illegaux;


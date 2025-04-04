import { useState, useEffect } from "react";

const Illegaux = () => {
    const [listeIllegaux, setIllegaux] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/users/getillegaux")
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    const formattedData = data.map(item => ({
                        nom: item.nom,  
                        prenom: item.prenom,
                        email: item.email,
                        adhesion: item.adhesion,
                    }));
                    setIllegaux(formattedData);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, []);

    return listeIllegaux;
};

export default Illegaux;


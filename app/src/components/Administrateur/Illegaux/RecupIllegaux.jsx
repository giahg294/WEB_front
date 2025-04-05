import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const Illegaux = () => {
    const [listeIllegaux, setIllegaux] = useState([]);

    useEffect(() => {
        fetch(back_port()+"/api/users/getillegaux")
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


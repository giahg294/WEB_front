import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const useNbEntreesTN_TR = () => {
    const [pistocheTN, setPistocheTN] = useState(0);
    const [pistocheTR, setPistocheTR] = useState(0);

    useEffect(() => {
        fetch(back_port() + "/stats/getParticipantsDetailsByEvent")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    let totalTN = 0;
                    let totalTR = 0;

                    data.forEach(event => {
                        event.eventDetails.forEach(detail => {
                            const slug = detail.slug.toLowerCase();

                            if (slug.includes("soiree-pistoche-tarif-normal")) {
                                totalTN += detail.nbrParticipants;
                            }
                            if (slug.includes("soiree-pistoche-tarif-reduit")) {
                                totalTR += detail.nbrParticipants;
                            }
                        });
                    });

                    setPistocheTN(totalTN);
                    setPistocheTR(totalTR);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, []);

    return { pistocheTN, pistocheTR };
};

export default useNbEntreesTN_TR;

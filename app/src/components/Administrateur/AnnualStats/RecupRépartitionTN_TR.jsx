import { useState, useEffect } from "react";
import back_port from "../../../connexion";

const useNbEntreesTN_TR = () => {
    const [pistocheTN, setPistocheTN] = useState(0);
    const [pistocheTR, setPistocheTR] = useState(0);

    useEffect(() => {
        fetch(back_port()+"/stats/getParticipantsDetailsByEvent")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    let pistocheTN = 0;
                    let pistocheTR = 0;

                    data.forEach(event => {
                        event.eventDetails.forEach(detail => {
                            if (detail.slug.includes("pistoche-Normal")) {
                                pistocheTN += detail.nbrParticipants;
                            }
                            if (detail.slug.includes("pistoche-TR")) {
                                pistocheTR += detail.nbrParticipants;
                            }
                        });
                    });

                    setPistocheTN(pistocheTN);
                    setPistocheTR(pistocheTR);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, []);

    return { pistocheTN, pistocheTR };
};

export default useNbEntreesTN_TR;
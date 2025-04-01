import { useState, useEffect } from "react";

const NbAbos = () => {
    const [pistocheAboTotal, setPistocheAboTotal] = useState(0);
    const [pistocheAboTRTotal, setPistocheAboTRTotal] = useState(0);

    useEffect(() => {
        fetch("http://localhost:4000/stats/getParticipantsDetailsByEvent")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    let aboTotal = 0;
                    let aboTRTotal = 0;

                    data.forEach(event => {
                        event.eventDetails.forEach(detail => {
                            if (detail.slug.includes("pistoche-Abo")) {
                                aboTotal += detail.nbrParticipants;
                            }
                            if (detail.slug.includes("pistoche-Abo-TR")) {
                                aboTRTotal += detail.nbrParticipants;
                            }
                        });
                    });

                    setPistocheAboTotal(aboTotal);
                    setPistocheAboTRTotal(aboTRTotal);
                }
            })
            .catch((error) => console.error("Erreur:", error));
    }, []);

    return { pistocheAboTotal, pistocheAboTRTotal };
};

export default NbAbos;
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import TimeBasedAdhesion from "./RecupAdhesions";
import ParticipantsByEvent from "./RecupNbParticipantsByEvent";
import NbAbos from "./RecupNbAbos";
import NbEntreesTN_TR from "./RecupRépartitionTN_TR";

{/*const participantData = [
  { seance: "Séance 1", participants: 10 },
  { seance: "Séance 2", participants: 20 },
  { seance: "Séance 3", participants: 15 },
  { seance: "Séance 4", participants: 25 },
  { seance: "Séance 5", participants: 30 },
];        = ParticipationByEvent*/
}


const Statsgraphes = () => {
    const { pistocheAboTNTotal, pistocheAboTRTotal } = NbAbos();
    const abonnesData = [
        { name: "Abonnements TR", value: pistocheAboTRTotal },
        { name: "Abonnements TN", value: pistocheAboTNTotal },
      ];
    const { pistocheTN, pistocheTR } = NbEntreesTN_TR();
    const entreesData = [
        { name: "Entrées TR", value: pistocheTR },
        { name: "Entrées TN", value: pistocheTN },
      ];

    return (
      <div className="p-6 min-h-stat">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Courbe Nombre Adhésions / Mois */}
          <div className="bg-white p-4 rounded-xl shadow-lg"  style={{ width: "450px" }}>
            <h2 className="text-lg font-semibold mb-4">Nombre d'adhésions par mois</h2>

            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={TimeBasedAdhesion()}>
                <CartesianGrid strokeDasharray="7 7" />
                <XAxis dataKey="date" />
                <XAxis dataKey="date" interval={7} /> 
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="NombreAdhesions" stroke="#4F46E5" strokeWidth={3} /> {/* Si on veut modifier la légende des abscisses (dataKey), il faut aussi modifier le nom des keys dans ce qui est renvoyé par TimeBasedAdhesion */}
              </LineChart>
            </ResponsiveContainer>
          </div>
  
          {/* Histogramme Nombre Participants / Séance */}
          <div className="bg-white p-4 rounded-xl shadow-lg" style={{ width: "450px" }}>
            <h2 className="text-lg font-semibold mb-4">Nombre de participants par séance</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={ParticipantsByEvent()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="seance" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Participants" fill="#3B82F6" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart: Nombre Abonnés & Nombre Abonnés Réduites */}
        <div className="bg-white p-4 rounded-xl shadow-lg mt-6">
            <h2 className="text-lg font-semibold mb-4">Répartition Nombre d'abonnements Tarif Normal et Tarif Réduit</h2>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Legend verticalAlign="top" height={36} />
                    <Pie
                        data={abonnesData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        label
                    >
                        {abonnesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? "#4F46E5" : "#3B82F6"} />
                        ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

        {/* Pie Chart: Nombre Entrées & Nombre Entrées Tarif Réduit */}
        <div className="bg-white p-4 rounded-xl shadow-lg mt-6">
            <h2 className="text-lg font-semibold mb-4">Répartition Nombre d'entrées Tarif Normal et Tarif Réduit</h2>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Legend verticalAlign="top" height={36} />
                    <Pie
                        data={entreesData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        label
                    >
                        {entreesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? "#4F46E5" : "#3B82F6"} />
                        ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
     );
};
export default Statsgraphes;

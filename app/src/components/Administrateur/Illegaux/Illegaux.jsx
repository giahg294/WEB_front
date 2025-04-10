import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import useIllegaux from './RecupIllegaux';
import back_port from "../../../connexion";

function IllegauxPage() {
  const illegauxData = useIllegaux();
  const [currentPage, setCurrentPage] = useState(1);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = illegauxData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(illegauxData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

const handleSendEmail = async () => {
  try {
    const response = await fetch(back_port()+"/email/illegalUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userWeHaveToSend: illegauxData.map((item) => item.email),
        subject,
        message,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Email envoyé avec succès !');
    } else {
      alert(`Erreur serveur : ${data.error}`);
    }
  } catch (error) {
    alert('Erreur de réseau lors de l’envoi du mail.');
    console.error(error);
  }
};


  return (
    <div className="ad-page">
      <Sidebar/>
      <h1 className="ad-titre">Liste des hors la loi</h1>

      {/* Conteneur en deux colonnes */}
      <div className="flex flex-wrap gap-6">
        {/* Table des utilisateurs */}
        <div className="flex-1 tableau-paiement">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-blue-100 text-blue-800">
                <th className="px-6 py-3 text-left text-sm font-medium">Prenom</th> 
                <th className="px-6 py-3 text-left text-sm font-medium">Nom</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                  <td className="px-6 py-4 text-sm">{item.prenom}</td>
                  <td className="px-6 py-4 text-sm">{item.nom}</td>
                  <td className="px-6 py-4 text-sm">{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="bot-paiement mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md disabled:bg-gray-400"
            >
              Précédent
            </button>
            <span className="mx-4 text-lg text-gray-700">Page {currentPage} sur {totalPages}</span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md disabled:bg-gray-400"
            >
              Suivant
            </button>
          </div>
        </div>

        {/* Formulaire d'envoi d'email */}
        <div className="w-full md:w-1/3 p-6 bg-white shadow-lg rounded-xl self-start">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Envoyer un mail à tous</h2>
          <input
            type="text"
            placeholder="Sujet"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-3"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full p-2 border border-gray-300 rounded-lg mb-3"
          />
          <button
            onClick={handleSendEmail}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Envoyer à tous
          </button>
        </div>
      </div>
    </div>
  );
}

export default IllegauxPage;

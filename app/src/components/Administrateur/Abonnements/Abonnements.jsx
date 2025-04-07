import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import useAbonnements from './RecupAbonnements';

function AbonnementPage() {
  const abonnementData = useAbonnements();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = abonnementData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(abonnementData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="ad-page">
      <Sidebar/>
      <h1 className="ad-titre">Liste des abonnements</h1>

      <div className="tableau-paiement">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-100 text-blue-800">
              <th className="px-6 py-3 text-left text-sm font-medium">Prénom</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Nom</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Événement</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                  <td className="px-6 py-4 text-sm">{item.prenom}</td>
                  <td className="px-6 py-4 text-sm">{item.nom}</td>
                  <td className="px-6 py-4 text-sm">{item.nom_event}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-sm">Aucun abonnement trouvé.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bot-paiement">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md disabled:bg-gray-400"
        >
          Précédent
        </button>
        <span className="text-lg text-gray-700">Page {currentPage} sur {totalPages}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md disabled:bg-gray-400"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

export default AbonnementPage;

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Illegaux from './RecupIllegaux';

function IllegauxPage() {

  const illegauxData = Illegaux();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = illegauxData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(illegauxData.length / itemsPerPage);
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
      <h1 className="ad-titre">Liste des illegaux</h1>

      <div className="tableau-paiement">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-100 text-blue-800">
              <th className="px-6 py-3 text-left text-sm font-medium">Nom</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Type de transaction</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Montant</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Date de transaction</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                <td className="px-6 py-4 text-sm">{item.nom}</td>
                <td className="px-6 py-4 text-sm">{item.email}</td>
                <td className="px-6 py-4 text-sm">{item.type}</td>
                <td className="px-6 py-4 text-sm">{item.prix}</td>
                <td className="px-6 py-4 text-sm">{item.paydate}</td>
              </tr>
            ))}
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

export default IllegauxPage;

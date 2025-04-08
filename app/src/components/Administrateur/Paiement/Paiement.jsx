import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import usePaiements from './RecupPaiements';

function PaiementPage() {
  {/*}
  const paiementData = [
    { nom: 'Yass', email: 'yass123@gmail.com', type:'bonnet', prix: '€12.00', paydate: '05/01/2025' },
    { nom: 'Lhomme', email: 'lhomme123@gmail.com', type:'adhesion', prix: '€20.00', paydate: '09/01/2025' },

  ]; */}

  const paiementData = usePaiements();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paiementData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(paiementData.length / itemsPerPage);
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
      <h1 className="ad-titre">Liste des paiements</h1>

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

export default PaiementPage;

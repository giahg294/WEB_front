import React, { useState } from 'react';
import Sidebar from './Sidebar';

function PaiementPage() {
  const paiementData = [
    { nom: 'Yass', email: 'yass123@gmail.com', type:'bonnet', prix: '€12.00', paydate: '05/01/2025' },
    { nom: 'Lhomme', email: 'lhomme123@gmail.com', type:'adhesion', prix: '€20.00', paydate: '09/01/2025' },
    { nom: 'Giaaa', email: 'giaaa123@gmail.com', type:'abonnement normal', prix: '€50.00', paydate: '05/02/2025' },
    { nom: 'Marine', email: 'marine123@gmail.com', type:'abonnement reduit', prix: '€40.00', paydate: '15/02/2025' },
    { nom: 'Bianca', email: 'bianca123@gmail.com', type:'abonnement normal', prix: '€50.00', paydate: '15/02/2025' },
    { nom: 'feifei', email: 'feifei123@gmail.com', type:'abonnement normal', prix: '€50.00', paydate: '20/02/2025' },
    { nom: 'David', email: 'daviddd@gmail.com', type:'abonnement normal', prix: '€50.00', paydate: '25/02/2025' },
    { nom: 'Rosa', email: 'rosaaa@gmail.com', type:'abonnement reduit', prix: '€40.00', paydate: '26/02/2025' },
    { nom: 'Lise', email: 'liseee@gmail.com', type:'abonnement normal', prix: '€50.00', paydate: '27/02/2025' },
    { nom: 'aumeurierr', email: 'aumeurierr@gmail.com', type:'abonnement normal', prix: '€50.00', paydate: '01/03/2025' },
    { nom: 'anonymaaa', email: 'anonymaaa@gmail.com', type:'abonnement normal', prix: '€50.00', paydate: '02/03/2025' },
    { nom: 'balefankanni', email: 'balefankanni@gmail.com', type:'abonnement normal', prix: '€50.00', paydate: '11/03/2025' },
    { nom: 'skrskrr', email: 'skkrr@gmail.com', type:'adhesion', prix: '€20.00', paydate: '16/03/2025' },
    { nom: 'flex', email: 'flexibleflex@gmail.com', type:'bonnet', prix: '€12.00', paydate: '20/03/2025' },
    { nom: 'paris', email: 'hilton@gmail.com', type:'abonnement normal', prix: '€50.00', paydate: '20/03/2025' },
    { nom: 'rafayel', email: 'moartstudio@gmail.com', type:'adhesion', prix: '€20.00', paydate: '23/03/2025' },
    { nom: 'sylus', email: 'andian@gmail.com', type:'abonnement normal', prix: '€50.00', paydate: '02/04/2025' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

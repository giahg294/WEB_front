import React, { useState } from 'react';

function PaiementPage() {
  // 定义支付记录数据
  const paiementData = [
    {
      nom: 'Yass',
      email: 'yass123@gmail.com',
      type:'bonnet',
      prix: '€12.00',
      paydate: '05/01/2025',
    },
    {
        nom: 'Lhomme',
        email: 'lhomme123@gmail.com',
        type:'adhesion',
        prix: '€20.00',
        paydate: '09/01/2025',
    },
    {
        nom: 'Giaaa',
        email: 'giaaa123@gmail.com',
        type:'abonnement normal',
        prix: '€50.00',
        paydate: '05/02/2025',
    },
    {

        nom: 'Marine',
        email: 'marine123@gmail.com',
        type:'abonnement reduit',
        prix: '€40.00',
        paydate: '15/02/2025',
    },
    {

        nom: 'Bianca',
        email: 'bianca123@gmail.com',
        type:'abonnement normal',
        prix: '€50.00',
        paydate: '15/02/2025',
    },
    {

        nom: 'feifei',
        email: 'feifei123@gmail.com',
        type:'abonnement normal',
        prix: '€50.00',
        paydate: '20/02/2025',
    },
    {

        nom: 'David',
        email: 'daviddd@gmail.com',
        type:'abonnement normal',
        prix: '€50.00',
        paydate: '25/02/2025',
    },
    {

        nom: 'Rosa',
        email: 'rosaaa@gmail.com',
        type:'abonnement reduit',
        prix: '€40.00',
        paydate: '26/02/2025',
    },
    {

        nom: 'Lise',
        email: 'liseee@gmail.com',
        type:'abonnement normal',
        prix: '€50.00',
        paydate: '27/02/2025',
    },
    {

        nom: 'aumeurierr',
        email: 'aumeurierr@gmail.com',
        type:'abonnement normal',
        prix: '€50.00',
        paydate: '01/03/2025',
    },
    {

        nom: 'anonymaaa',
        email: 'anonymaaa@gmail.com',
        type:'abonnement normal',
        prix: '€50.00',
        paydate: '02/03/2025',
    },
    {

        nom: 'balefankanni',
        email: 'balefankanni@gmail.com',
        type:'abonnement normal',
        prix: '€50.00',
        paydate: '11/03/2025',
    },
    {

        nom: 'skrskrr',
        email: 'skkrr@gmail.com',
        type:'adhesion',
        prix: '€20.00',
        paydate: '16/03/2025',
    },
    {

        nom: 'flex',
        email: 'flexibleflex@gmail.com',
        type:'bonnet',
        prix: '€12.00',
        paydate: '20/03/2025',
    },
    {

        nom: 'paris',
        email: 'hilton@gmail.com',
        type:'abonnement normal',
        prix: '€50.00',
        paydate: '20/03/2025',
    },
    {

        nom: 'rafayel',
        email: 'moartstudio@gmail.com',
        type:'adhesion',
        prix: '€20.00',
        paydate: '23/03/2025',
    },
    {

        nom: 'sylus',
        email: 'andian@gmail.com',
        type:'abonnement normal',
        prix: '€50.00',
        paydate: '02/04/2025',
    },


    // on peut ajouter des donnees
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
    <div style={{ paddingBottom: '50px', background: 'linear-gradient(135deg, #A3D8F4, #3B9F8D)' }}>

      <h1>Liste des paiements</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#D0E9F7' }}>

            <th style={{ padding: '15px 20px', textAlign: 'center', fontSize: '16px' }}>Nom</th>
            <th style={{ padding: '15px 20px', textAlign: 'center', fontSize: '16px' }}>Email</th>
            <th style={{ padding: '15px 20px', textAlign: 'center', fontSize: '16px' }}>Type de transaction</th>
            <th style={{ padding: '15px 20px', textAlign: 'center', fontSize: '16px' }}>Montant</th>
            <th style={{ padding: '15px 20px', textAlign: 'center', fontSize: '16px' }}>Date de transaction</th>

          
          </tr>
        </thead>

        <tbody>
        {currentItems.map((item, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F1F9FF' : '#E0F4FF' }}>

            <td style={{ padding: '10px', textAlign: 'center' }}>{item.nom}</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>{item.email}</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>{item.type}</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>{item.prix}</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>{item.paydate}</td>
          </tr>
          ))}
        </tbody>
      </table>


      <div style={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        backgroundColor: '#A3D8F4',
        padding: '10px 0',
        textAlign: 'center',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
      }}>
       
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          style={{
            backgroundColor: '#3B9F8D',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '0 10px',
            fontSize: '16px',
          }}
        >
          Précédent
        </button>
        <span style={{ fontSize: '16px', color: '#1D4E89' }}>Page {currentPage} sur {totalPages}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          style={{
            backgroundColor: '#3B9F8D',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '0 10px',
            fontSize: '16px',
          }}
        >
          Suivant
        </button>




      </div>
    </div>
  );
}



export default PaiementPage;





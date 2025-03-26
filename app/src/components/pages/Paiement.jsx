import React, { useState } from 'react';

function PaiementPage() {
  // 定义支付记录数据
  const paiementData = [
    {
      id: '#4027111',
      date: '12/01/2025',
      email: 'lucaslhomme01@gmail.com',
      prix: '€700.00',
      eventDate: '30/01/2025',
    },
    {
      id: '#4027222',
      date: '12/01/2025',
      email: 'lucaslhomme01@gmail.com',
      prix: '€700.00',
      eventDate: '30/02/2025',
    },
    {
        id: '#4027333',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027444',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027555',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027666',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027777',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027888',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027999',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4028000',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4028111',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4028222',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
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
            <th style={{ padding: '15px 20px', textAlign: 'center', fontSize: '16px' }}>ID</th>
            <th style={{ padding: '15px 20px', textAlign: 'center', fontSize: '16px' }}>Nom</th>
            <th style={{ padding: '15px 20px', textAlign: 'center', fontSize: '16px' }}>Email</th>
            <th style={{ padding: '15px 20px', textAlign: 'center', fontSize: '16px' }}>Prix</th>
            <th style={{ padding: '15px 20px', textAlign: 'center', fontSize: '16px' }}>Date de l'évènement</th>

          
          </tr>
        </thead>

        <tbody>
        {currentItems.map((item, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#F1F9FF' : '#E0F4FF' }}>
            <td style={{ padding: '10px', textAlign: 'center' }}>{item.id}</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>V</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>{item.email}</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>{item.prix}</td>
            <td style={{ padding: '10px', textAlign: 'center' }}>{item.eventDate}</td>
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
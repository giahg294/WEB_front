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
        id: '#4027222',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027222',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027222',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027222',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027222',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027222',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027222',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
      {
        id: '#4027222',
        date: '12/01/2025',
        email: 'lucaslhomme01@gmail.com',
        prix: '€700.00',
        eventDate: '30/02/2025',
      },
    // on peut ajouter des donnees
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;  

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
    <div>
      <h1>Liste des paiements</h1>

      
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Prix</th>
            <th>Date de l'évènement</th>
          </tr>
        </thead> */}



        <table>
        <thead>
          <tr style={{ backgroundColor: '#f1f1f1' }}>
            <th style={{ padding: '10px 20px' }}>ID</th>
            <th style={{ padding: '10px 20px' }}>Nom</th>
            <th style={{ padding: '10px 20px' }}>Email</th>
            <th style={{ padding: '10px 20px' }}>Prix</th>
            <th style={{ padding: '10px 20px' }}>Date de l'évènement</th>
          </tr>
        </thead>


        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>V</td>
              <td>{item.email}</td>
              <td>{item.prix}</td>
              <td>{item.eventDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>Précédent</button>
        <span>Page {currentPage} sur {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Suivant</button>
      </div>
    </div>
  );
}

export default PaiementPage;
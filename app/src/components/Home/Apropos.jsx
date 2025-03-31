import "./Apropos.css";
import React from "react";

const Apropos = () => {
  return (
    <div className="container">
      <div className="text-content">
      <h1 className="titreapropos">Qui sommes-nous ?</h1>
        <p className="txtapropos">
          Insaquatic est l'association de natation et de water-polo de l'INSA Lyon. Elle compte 200 adhérents, parmi lesquels figurent des nageurs et water-poloistes confirmés, membres des équipes AS compétition, mais aussi des étudiants qui souhaitent simplement nager quelques longueurs pour se détendre après une semaine bien chargée.
          Nous proposons tous les vendredis des créneaux de deux heures durant lesquels les étudiants de l'INSA, quel que soit leur niveau, peuvent venir nager dans la piscine du campus.
          En plus des entraînements réguliers, nous organisons divers événements tout au long de l'année pour faire découvrir les sports aquatiques.
        </p>
      </div>
      <div className="container-img">
      <img src="/coupe.jpeg" alt="Groupe" />
      </div>
    </div>
  );
};

export default Apropos;

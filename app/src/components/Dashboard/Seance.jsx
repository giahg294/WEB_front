import React, { Component } from "react";

class Seance extends Component {
  isPast() {
    return new Date(this.props.date) < new Date();
  }

  handleUpdate = (key, delta) => {
    const currentValue = this.props[key];
    this.props.onUpdate(key, Math.max(currentValue + delta, 0));
  };

  renderControl(label, value, key) {
    return (
      <div className="flex items-center justify-between mb-4 gap-4">
        {/* Libellé et valeur */}
        <div className="flex-1 text-center">
          <span className="font-semibold text-gray-700">{label}:</span>
          <span className="ml-2 text-lg">{value}</span>
        </div>
      </div>
    );
  }

  render() {
    const { date, entreeTN, entreeTR, abonnementTN, abonnementTR } = this.props;

    return (
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          Créneau piscine - {date}
        </h2>
        
        <p className="text-lg text-gray-700 mb-6">
          <strong>Status :</strong> {this.isPast() ? "Passé 🏊‍♂️" : "À venir 📅"}
        </p>

        <div className="space-y-4">
          {this.renderControl("Entrée Tarif Normal", entreeTN, 'participants')}
          {this.renderControl("Entrée Tarif Réduit", entreeTR, 'participantsAvtg')}
          {this.renderControl("Abonnement Tarif Normal", abonnementTN, 'adhesions')}
          {this.renderControl("Abonnement Tarif réduit", abonnementTR, 'bonnetsVendus')}
        </div>
      </div>
    );
  }
}

export default Seance;
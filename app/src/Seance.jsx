import React, { Component } from "react";

class Seance extends Component {

  isPast() {
    return new Date(this.props.date) < new Date();
  }

  addParticipant = () => {
    this.props.onUpdateParticipants(this.props.participants + 1);
  };

  addParticipantAvtg = () => {
    this.props.onUpdateParticipantsAvtg(this.props.participantsAvtg + 1);
  };

  sellBonnet = () => {
    this.props.onUpdateBonnets(this.props.bonnetsVendus + 1);
  };

  render() {
    const { date, participants, participantsAvtg, bonnetsVendus } = this.props;

    return (
      <div className="bg-blue-100 p-6 rounded-lg shadow-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          Créneau piscine - {date}
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Status :</strong> {this.isPast() ? "Passé 🏊‍♂️" : "À venir 📅"}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Participants :</strong> {participants}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Participants Tarif Réduit:</strong> {participantsAvtg}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Bonnets vendus :</strong> {bonnetsVendus}
        </p>
        <div className="flex gap-4">
          <button
            onClick={this.addParticipant}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
          >
            Ajouter un participant
          </button>
          <button
            onClick={this.addParticipantAvtg}
            className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
          >
            Ajouter un participant Tarif Réduit
          </button>
          <button
            onClick={this.sellBonnet}
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition"
          >
            Vendre un bonnet
          </button>
        </div>
      </div>
    );
  }
}

export default Seance;
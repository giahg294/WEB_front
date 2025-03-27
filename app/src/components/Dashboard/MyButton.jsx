import React from "react";

function MyButton({ ButtonText, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
    >
      {ButtonText}
    </button>
  );
}

export default MyButton;

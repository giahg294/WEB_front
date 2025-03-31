import React from "react";

function MyButton({ ButtonText, onClick }) {
  return (
    <button
      onClick={onClick}
      className="ad-button"
    >
      {ButtonText}
    </button>
  );
}

export default MyButton;

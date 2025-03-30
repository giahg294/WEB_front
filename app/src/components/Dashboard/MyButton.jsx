import React from "react";

function MyButton({ ButtonText, onClick }) {
  return (
    <button
      onClick={onClick}
      className="button"
    >
      {ButtonText}
    </button>
  );
}

export default MyButton;

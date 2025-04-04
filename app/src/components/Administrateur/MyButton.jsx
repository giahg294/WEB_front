import React from "react";

function MyButton({ ButtonText, onClick, className }) {
  return (
    <button onClick={onClick} className={`ad-button ${className}`}> 
      {ButtonText}
    </button>
  );
}

export default MyButton;


import React from "react";

function MyButton({ButtonText, onClick}) {
  return (
    <button onClick={onClick}>
      {ButtonText}
    </button>
  );
}

export default MyButton;
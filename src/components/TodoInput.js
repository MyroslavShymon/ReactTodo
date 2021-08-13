import React, { useState } from "react";

export default function TodoInput({ action, buttonName, textName }) {
  const [text, setText] = useState("");
  console.log("todo input render");
  return (
    <>
      <span>{textName}</span>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        onClick={() => {
          action(text);
          setText("");
        }}
      >
        {buttonName}
      </button>
    </>
  );
}

//15 - 9 symbols
//19 - 9 symbols

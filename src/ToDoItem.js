import React, { useState } from "react";
import del from "../src/logos/del.png";

function ToDoItem({ toDoItem, index, removeItem, handleToDoItemChange }) {
  const [clickStatus, setClickStatus] = useState("unclicked");
  const [inputValue, setInputValue] = useState(toDoItem);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleToDoItemClick = () => {
    setClickStatus("clicked");
  };

  const handleToDoItemEnter = (event) => {
    if (event.key === "Enter") {
      handleToDoItemChange(inputValue, index);
      setClickStatus("unclicked");
    }
  };

  const isClicked = clickStatus === "clicked";

  return (
    <div className="toDoItem">
      <input
        type="checkbox"
        className="tickbox"
        onClick={() => removeItem("completed", toDoItem, index)}
        checked={false}
        disabled={isClicked}
      />
      {!isClicked ? (
        <p onClick={handleToDoItemClick}>{toDoItem}</p>
      ) : (
        <input
          onChange={handleInputChange}
          onKeyDown={handleToDoItemEnter}
          type="text"
          value={inputValue}
        />
      )}
      <button
        onClick={() => removeItem("deleted", toDoItem, index)}
        key={index}
        disabled={isClicked}
      >
        <img src={del} className="delete" />
      </button>
    </div>
  );
}

export default ToDoItem;

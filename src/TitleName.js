import React, { useState } from "react";
import checklist from "../src/logos/checklist.png";
import "./ToDoList.css";

function TitleName({ title, titleChangeHandler }) {
  const [clButton, setClButton] = useState("unclicked");
  const [inputValue, setInputValue] = useState(title);

  const clButtonHandler = () => {
    setClButton("clicked");
  };

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleToDoItemEnter = (event) => {
    if (event.key === "Enter") {
      titleChangeHandler(inputValue);
      setClButton("unclicked");
    }
  };

  return (
    <div className="titleName">
      <button onClick={clButtonHandler}>
        <img src={checklist} className="title-button" />
      </button>
      {clButton === "unclicked" ? (
        <h1 className="title">{title}</h1>
      ) : (
        <input
          onChange={handleInputChange}
          onKeyDown={handleToDoItemEnter}
          type="text"
          placeholder="Type new title here"
          value={inputValue}
        />
      )}
    </div>
  );
}

export default TitleName;

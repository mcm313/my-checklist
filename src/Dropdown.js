import React, { useState } from "react";
import heart from "../src/logos/heart.png";
import checklist from "../src/logos/checklist.png";
import deleted from "../src/logos/deleted.png";
import completed from "../src/logos/checkedbox.png";
import "./ToDoList.css";

function Dropdown({ title, handleSelDropdown, toggleDropdown, isOpen }) {
  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        <img src={heart} className="menuLogo" />
      </button>
      {isOpen && (
        <ul className=" dropdown-list">
          <li onClick={() => handleSelDropdown("checklist")}>
            <img src={checklist} className="icon-checklist" />
            {title}
          </li>
          <li onClick={() => handleSelDropdown("completed")}>
            <img src={completed} className="icon-completed" />
            {"Completed"}
          </li>
          <li onClick={() => handleSelDropdown("deleted")}>
            <img src={deleted} className="icon-deleted" />
            {"Deleted"}
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;

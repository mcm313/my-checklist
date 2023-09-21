import React, { useState, useEffect } from "react";
import TitleName from "./TitleName";
import Dropdown from "./Dropdown";
import ToDoItem from "./ToDoItem";
import List from "./List";
import deleted from "../src/logos/deleted.png";
import completed from "../src/logos/checkedbox.png";
import "./ToDoList.css";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [title, setTitle] = useState("My Checklist");
  const [completedList, setCompletedList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);
  const [selDropdown, setSelDropdown] = useState("checklist");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const toDoListHandler = (event) => {
    if (event.key === "Enter") {
      setToDoList((prev) => [inputValue, ...prev]);
      setInputValue("");
    }
  };

  const titleChangeHandler = (newTitle) => {
    setTitle(newTitle);
  };

  const handleToDoItemChange = (item, index) => {
    const newToDoList = toDoList.map((e, i) => {
      if (i === index) {
        return item;
      } else {
        return e;
      }
    });
    setToDoList(newToDoList);
  };

  const removeItem = (type, item, targetIndex) => {
    if (type === "completed") {
      setCompletedList((prev) => [item, ...prev]);
    } else if (type === "deleted") {
      setDeletedList((prev) => [item, ...prev]);
    }
    setToDoList(toDoList.filter((item, index) => index !== targetIndex));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelDropdown = (clDropdown) => {
    setSelDropdown(clDropdown);
    toggleDropdown();
  };

  const restoreItem = (item, targetIndex) => {
    setToDoList((prev) => [item, ...prev]);
    if (selDropdown === "deleted") {
      setDeletedList(
        deletedList.filter((item, index) => index !== targetIndex)
      );
    } else if (selDropdown === "completed") {
      setCompletedList(
        completedList.filter((item, index) => index !== targetIndex)
      );
    }
  };

  return (
    <div className="toDoList">
      <Dropdown
        title={title}
        handleSelDropdown={handleSelDropdown}
        toggleDropdown={toggleDropdown}
        isOpen={isOpen}
      />
      {selDropdown === "checklist" ? (
        <>
          <TitleName title={title} titleChangeHandler={titleChangeHandler} />
          <div className="input">
            <input
              className="input-box"
              onChange={handleInputChange}
              onKeyDown={toDoListHandler}
              type="text"
              name="input"
              placeholder="Type here"
              value={inputValue}
            />
          </div>
          {toDoList.map((item, index) => (
            <ToDoItem
              toDoItem={item}
              index={index}
              removeItem={removeItem}
              handleToDoItemChange={handleToDoItemChange}
            />
          ))}
        </>
      ) : selDropdown === "completed" ? (
        <>
          <div className="titleName">
            <img src={completed} className="title-icon" />
            <h1 className="title">Completed</h1>
          </div>
          {completedList.map((item, index) => (
            <List itemList={item} index={index} restoreItem={restoreItem} />
          ))}
        </>
      ) : (
        selDropdown === "deleted" && (
          <>
            <div className="titleName">
              <img src={deleted} className="title-icon" />
              <h1 className="title">Deleted</h1>
            </div>
            {deletedList.map((item, index) => (
              <List itemList={item} index={index} restoreItem={restoreItem} />
            ))}
          </>
        )
      )}
    </div>
  );
}

export default ToDoList;

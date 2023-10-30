import { Checkbox, Divider, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import "../main.css";
import { DeleteOutline } from "@mui/icons-material";
import InputTask from "./InputTask";
import DisplayTask from "./DisplayTask";
import Tickbox from "./Tickbox";
import DeleteButton from "./DeleteButton";

function Task({
  updateListHandler,
  index,
  task,
  type,
  changeListTypeHandler,
  currEditing,
  currEditChangeHandler,
  targetIndex,
}) {
  const [inputValue, setInputValue] = useState("");
  const [disable, setDisable] = useState(false);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleClick = (index) => {
    setInputValue(task);
    setDisable(true);
    currEditChangeHandler(index);
  };

  const handleOnBlur = (event) => {
    if (inputValue !== "") {
      updateListHandler(inputValue, index, targetIndex);
      setDisable(false);
      currEditChangeHandler(null);
    }
  };

  return (
    <Grid container alignItems="center">
      <Tickbox
        task={task}
        index={index}
        type={type}
        changeListTypeHandler={changeListTypeHandler}
        disable={disable}
      />
      {currEditing === index && type === "new" ? (
        <InputTask
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleOnBlur={handleOnBlur}
        />
      ) : (
        <DisplayTask
          task={task}
          index={index}
          type={type}
          handleClick={handleClick}
        />
      )}
      <DeleteButton
        task={task}
        index={index}
        type={type}
        changeListTypeHandler={changeListTypeHandler}
        disable={disable}
      />
      <Grid item xs={12}>
        <Divider variant="middle" sx={{ maxWidth: 355 }} />
      </Grid>
    </Grid>
  );
}

export default Task;

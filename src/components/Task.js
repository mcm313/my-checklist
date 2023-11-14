import { Divider, Grid, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import "../main.css";
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
  const matches = useMediaQuery("(min-width:450px)");
  const matches2 = useMediaQuery("(max-width:320px)");

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
          matches={matches}
          matches2={matches2}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleOnBlur={handleOnBlur}
        />
      ) : (
        <DisplayTask
          matches={matches}
          matches2={matches2}
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
        <Divider variant="middle" sx={{ minWidth: 200 }} />
      </Grid>
    </Grid>
  );
}

export default Task;

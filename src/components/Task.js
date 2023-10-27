import {
  Button,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "../main.css";
import { DeleteOutline } from "@mui/icons-material";

function Task({ taskListHandler, index, task, removeItem }) {
  const [inputValue, setInputValue] = useState("");
  const [updated, setUpdated] = useState(true);
  const [disable, setDisable] = useState(false);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleToDoItemClick = () => {
    setInputValue(task);
    setUpdated(false);
    setDisable(true);
  };

  const handleToDoItemEnter = (event) => {
    if (event.key === "Enter") {
      taskListHandler(inputValue, index);
      setDisable(false);
      if (inputValue !== "") {
        setUpdated(true);
      }
    }
  };

  return (
    <Grid container alignItems="center">
      <Checkbox
        onClick={() => removeItem("completed", task, index)}
        checked={false}
        disabled={disable}
      />
      {updated ? (
        <>
          <Button
            onClick={handleToDoItemClick}
            disableElevation
            sx={{ textAlign: "left", color: "#141220" }}
          >
            <Typography variant="body1" sx={{ minWidth: 310 }}>
              {task}
            </Typography>
          </Button>
          <IconButton
            onClick={() => removeItem("deleted", task, index)}
            key={index}
          >
            <DeleteOutline />
          </IconButton>
          <Grid item xs={12}>
            <Divider variant="middle" sx={{ maxWidth: 355 }} />
          </Grid>
        </>
      ) : (
        <>
          <TextField
            id="standard-basic"
            variant="standard"
            size="small"
            margin="normal"
            onChange={handleInputChange}
            onKeyDown={handleToDoItemEnter}
            value={inputValue}
            sx={{ minWidth: 310 }}
          />
          <IconButton
            onClick={() => removeItem("deleted", task, index)}
            key={index}
            disabled={disable}
          >
            <DeleteOutline />
          </IconButton>
        </>
      )}
    </Grid>
  );
}

export default Task;

import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

function Description({ desc, descChangeHandler }) {
  const [inputValue, setInputValue] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleToDoItemEnter = (event) => {
    if (event.keyCode === 13) {
      descChangeHandler(inputValue);
      setClicked(false);
    }
  };

  const handleToDoItemClick = () => {
    setClicked(true);
  };
  return (
    <>
      {clicked ? (
        <TextField
          id="standard-basic"
          variant="standard"
          size="small"
          margin="normal"
          onChange={handleInputChange}
          onKeyDown={handleToDoItemEnter}
          value={inputValue}
          placeholder={desc}
          sx={{ height: 25, fontSize: 22, p: 1, pt: 3 }}
        />
      ) : (
        <Button
          onClick={handleToDoItemClick}
          disableElevation
          sx={{ textAlign: "left", color: "#141220" }}
        >
          <Typography variant="h6">{desc}</Typography>
        </Button>
      )}
    </>
  );
}

export default Description;

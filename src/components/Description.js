import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

function Description({ desc, descChangeHandler }) {
  const [inputValue, setInputValue] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleOnBlur = (event) => {
    descChangeHandler(inputValue);
    setClicked(false);
  };

  const handleClick = () => {
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
          onBlur={handleOnBlur}
          value={inputValue}
          placeholder={desc}
          sx={{ height: 25, fontSize: 22, p: 1, pt: 3 }}
        />
      ) : (
        <Button
          onClick={handleClick}
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

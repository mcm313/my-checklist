import { InputBase } from "@mui/material";
import React from "react";

function InputTask({
  matches,
  matches2,
  inputValue,
  handleInputChange,
  handleOnBlur,
}) {
  return (
    <>
      {matches ? (
        <InputBase
          id="standard-basic"
          variant="standard"
          size="small"
          margin="normal"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          value={inputValue}
          sx={{ minWidth: 310 }}
        />
      ) : matches2 ? (
        <InputBase
          id="standard-basic"
          variant="standard"
          size="small"
          margin="normal"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          value={inputValue}
          sx={{ maxWidth: 185 }}
        />
      ) : (
        <InputBase
          id="standard-basic"
          variant="standard"
          size="small"
          margin="normal"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          value={inputValue}
          sx={{ minWidth: 225 }}
        />
      )}
    </>
  );
}

export default InputTask;

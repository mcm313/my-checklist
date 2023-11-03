import { InputBase } from "@mui/material";
import React from "react";

function InputTask({ matches, inputValue, handleInputChange, handleOnBlur }) {
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

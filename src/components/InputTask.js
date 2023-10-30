import { InputBase, TextField } from "@mui/material";
import React from "react";

function InputTask({ inputValue, handleInputChange, handleOnBlur }) {
  return (
    <TextField
      id="standard-basic"
      variant="standard"
      size="small"
      margin="normal"
      onChange={handleInputChange}
      onBlur={handleOnBlur}
      value={inputValue}
      sx={{ minWidth: 310 }}
    />
  );
}

export default InputTask;

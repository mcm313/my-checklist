import React, { useState } from "react";
import "../main.css";
import { Button, InputBase, Typography } from "@mui/material";

function TitleName({ title, titleChangeHandler }) {
  const [clickStatus, setClickStatus] = useState("unclicked");
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setClickStatus("clicked");
  };

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleOnBlur = (event) => {
    titleChangeHandler(inputValue);
    setClickStatus("unclicked");
  };

  return (
    <>
      {clickStatus === "unclicked" ? (
        <Button onClick={handleClick}>
          <Typography variant="h4" component="h1" sx={{ color: "#141220" }}>
            <b>{title} BUCKETLIST</b>
          </Typography>
        </Button>
      ) : (
        <InputBase
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          value={inputValue}
          placeholder={title}
          sx={{ height: 35, fontSize: 33, p: 1, pt: 3 }}
        />
      )}
    </>
  );
}

export default TitleName;

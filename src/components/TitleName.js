import React, { useState } from "react";
import "../main.css";
import { Button, InputBase, Typography } from "@mui/material";

function TitleName({ title, titleChangeHandler }) {
  const [clickStatus, setClickStatus] = useState("unclicked");
  const [inputValue, setInputValue] = useState("");

  const handleToDoItemClick = () => {
    setClickStatus("clicked");
  };

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleToDoItemEnter = (event) => {
    if (event.key === "Enter") {
      titleChangeHandler(inputValue);
      setClickStatus("unclicked");
    }
  };

  return (
    <>
      {clickStatus === "unclicked" ? (
        <Button onClick={handleToDoItemClick}>
          <Typography variant="h4" component="h1" sx={{ color: "#141220" }}>
            <b>{title} BUCKETLIST</b>
          </Typography>
        </Button>
      ) : (
        <InputBase
          onChange={handleInputChange}
          onKeyDown={handleToDoItemEnter}
          value={inputValue}
          placeholder={title}
          sx={{ height: 35, fontSize: 33, p: 1, pt: 3 }}
        />
      )}
    </>
  );
}

export default TitleName;

import { Button, Typography } from "@mui/material";
import React from "react";

function DisplayTask({ matches, task, index, type, handleClick }) {
  return (
    <>
      {type === "new" ? (
        <Button
          onClick={() => handleClick(index)}
          disableElevation
          sx={{ textAlign: "left", color: "#141220" }}
        >
          {matches ? (
            <Typography variant="body1" sx={{ minWidth: 310 }}>
              {task}
            </Typography>
          ) : (
            <Typography variant="body1" sx={{ minWidth: 250 }}>
              {task}
            </Typography>
          )}
        </Button>
      ) : (
        <Button disableElevation sx={{ textAlign: "left", color: "#141220" }}>
          <Typography variant="body1" sx={{ minWidth: 310 }}>
            {task}
          </Typography>
        </Button>
      )}
    </>
  );
}

export default DisplayTask;

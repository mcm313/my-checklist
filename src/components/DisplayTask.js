import { Button, Typography } from "@mui/material";
import React from "react";

function DisplayTask({ matches, matches2, task, index, type, handleClick }) {
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
          ) : matches2 ? (
            <Typography variant="body1" sx={{ minWidth: 170 }}>
              {task}
            </Typography>
          ) : (
            <Typography variant="body1" sx={{ minWidth: 210 }}>
              {task}
            </Typography>
          )}
        </Button>
      ) : (
        <Button disableElevation sx={{ textAlign: "left", color: "#141220" }}>
          {matches ? (
            <Typography variant="body1" sx={{ minWidth: 355 }}>
              {task}
            </Typography>
          ) : matches2 ? (
            <Typography variant="body1" sx={{ minWidth: 215 }}>
              {task}
            </Typography>
          ) : (
            <Typography variant="body1" sx={{ minWidth: 255 }}>
              {task}
            </Typography>
          )}
        </Button>
      )}
    </>
  );
}

export default DisplayTask;

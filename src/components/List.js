import {
  CheckBox,
  CheckBoxOutlineBlank,
  RestoreFromTrash,
} from "@mui/icons-material";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

function List({ task, index, restoreItem, listName }) {
  return (
    <Grid container alignItems="center">
      {listName === "completed" && (
        <IconButton
          onClick={() => restoreItem("completed", task, index)}
          key={index}
        >
          <CheckBox />
        </IconButton>
      )}
      {listName === "deleted" && (
        <IconButton disabled>
          <CheckBoxOutlineBlank />
        </IconButton>
      )}
      <Typography variant="body1" sx={{ minWidth: 310 }}>
        {task}
      </Typography>
      {listName === "deleted" && (
        <IconButton
          onClick={() => restoreItem("deleted", task, index)}
          key={index}
        >
          <RestoreFromTrash />
        </IconButton>
      )}
      <Grid item xs={12}>
        <Divider variant="middle" sx={{ maxWidth: 355 }} />
      </Grid>
    </Grid>
  );
}

export default List;

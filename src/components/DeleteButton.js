import { DeleteOutline, RestoreFromTrash } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

function DeleteButton({ task, index, type, changeListTypeHandler, disable }) {
  return (
    <>
      {type === "deleted" && (
        <IconButton
          onClick={() => changeListTypeHandler("new", task, index)}
          key={index}
        >
          <RestoreFromTrash />
        </IconButton>
      )}
      {type === "new" && (
        <IconButton
          onClick={() => changeListTypeHandler("deleted", task, index)}
          key={index}
          disabled={disable}
        >
          <DeleteOutline />
        </IconButton>
      )}
    </>
  );
}

export default DeleteButton;

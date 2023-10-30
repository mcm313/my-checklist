import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import React from "react";

function Tickbox({ task, index, type, changeListTypeHandler, disable }) {
  return (
    <>
      {type === "completed" && (
        <IconButton
          onClick={() => changeListTypeHandler("new", task, index)}
          key={index}
        >
          <CheckBox />
        </IconButton>
      )}
      {type === "deleted" && (
        <IconButton disabled>
          <CheckBoxOutlineBlank />
        </IconButton>
      )}
      {type === "new" && (
        <Checkbox
          onClick={() => changeListTypeHandler("completed", task, index)}
          checked={false}
          disabled={disable}
        />
      )}
    </>
  );
}

export default Tickbox;

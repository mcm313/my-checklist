import React from "react";
import res from "../src/logos/restore.png";

function List({ itemList, index, restoreItem }) {
  return (
    <div className="listItem">
      <p>{itemList}</p>
      <button onClick={() => restoreItem(itemList, index)} key={index}>
        <img src={res} className="restore" />
      </button>
    </div>
  );
}

export default List;

import React, { useState } from "react";
import deleteSugguestion from "./API/deleteSugguestion";

const SugguestionListTile = ({ sugguestion }) => {
  return (
    <div style={{textAlign:"left", padding:"1rem"}}>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteSugguestion(sugguestion.id).then((result) => {
            if (result.success) {
              window.location.reload();
            }
          });
        }}
      >
        delete
      </button>
      <p>id : {sugguestion.id}</p>
      <p>type : {sugguestion.sugguestion_type}</p>
      <p>content : {sugguestion.sugguestion_text}</p>
      <p>likes : {sugguestion.count_likes}</p>
      <p>created at : {sugguestion.created_at}</p>
      <hr />
    </div>
  );
};

export default SugguestionListTile;

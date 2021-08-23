import React, { useState } from "react";

const SugguestionListTile = ({ sugguestion }) => {
  return (
    <div>
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

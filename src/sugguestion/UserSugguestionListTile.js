import React, { useEffect, useState } from "react";
// import deleteSugguestion from "./API/deleteSugguestion";
// import updateSugguestion from "./API/updateSugguestion";
import "../style/index.css";

const SugguestionListTile = ({ sugguestion }) => {
  // const [update, setUpdate] = useState(false);

  // const [id, setId] = useState();
  // const [type, setType] = useState("");
  // const [content, setContent] = useState("");
  const [message, setMessage] = useState();

  // useEffect(() => {
  //   setType(sugguestion.sugguestion_type);
  //   setContent(sugguestion.sugguestion_text);
  //   setId(sugguestion.id);
  // }, []);

  // const updateSubmit = async (e) => {
  //   e.preventDefault();
  //   if (type && content) {
  //     const result = await updateSugguestion(id, type, content);
  //     console.log(result);
  //     if (result.success) {
  //       window.location.reload();
  //     } else {
  //       setMessage("실패");
  //     }
  //   } else {
  //     alert("내용을 입력하시오");
  //   }
  // };

  const normal = (
    <div className="container">
      <div className="item">
        <p>{sugguestion.id}</p>
      </div>
      <div className="item">
        <p>{sugguestion.user_name}</p>
      </div>
      <div className="item">
        <p>{sugguestion.text}</p>
      </div>
      <div className="item">
        <p>{sugguestion.created_at.split("T")[0]}</p>
      </div>
    </div>
  );

  // const form = (
  //   <div style={{ margin: "2rem" }}>
  //     <form onSubmit={updateSubmit}>
  //       <div>
  //         <p>update sugguestion : {sugguestion.id}</p>
  //         <input
  //           placeholder="type"
  //           type="text"
  //           value={type}
  //           onChange={(e) => {
  //             e.preventDefault();
  //             setType(e.target.value);
  //           }}
  //         />
  //       </div>
  //       <div>
  //         <textarea
  //           placeholder="content"
  //           type="text"
  //           cols="40"
  //           rows="5"
  //           style={{
  //             lineHeight: 1.5,
  //             fontSize: "1rem",
  //           }}
  //           value={content}
  //           onChange={(e) => {
  //             e.preventDefault();
  //             setContent(e.target.value);
  //           }}
  //         ></textarea>
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // );

  return (
    <div style={{ textAlign: "left", padding: "1rem" }}>
      {/* <button
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
      </button> */}
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          if (!update) {
            setUpdate(true);
            setId(sugguestion.id);
          } else {
            setUpdate(false);
          }
        }}
      >
        update
      </button> */}
      {message ? <p>{message}</p> : <></>}
      {/* {update ? form : normal} */}
      {normal}
    </div>
  );
};

export default SugguestionListTile;

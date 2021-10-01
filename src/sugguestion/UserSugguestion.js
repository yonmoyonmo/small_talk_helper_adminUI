import React, { useEffect, useState } from "react";
import getUserSugguestions from "./API/getUserSugguestions";
import UserSugguestionListTile from "./UserSugguestionListTile";

const UserSugguestion = () => {
  const [sugguestions, setSugguestions] = useState([]);
  const [page, setPage] = useState(1);
  const [pageStop, setPageStop] = useState(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    let mounted = true;
    getUserSugguestions(page).then((fetchedSugguestions) => {
      if (mounted) {
        if (fetchedSugguestions !== undefined) {
          console.log(JSON.stringify(fetchedSugguestions));
          if (fetchedSugguestions.message) {
            setPageStop(true);
            setPage(page - 1);
            console.log(fetchedSugguestions.message);
          } else {
            setPageStop(false);
            setSugguestions(fetchedSugguestions);
          }
        }
      }
    });
    return () => (mounted = false);
  }, [page]);
  return (
    <div style={{ textAlign: "left", margin: "0.7rem" }}>
      <a href="/">home</a>
      <h1>유저들의 추천</h1>
      <h3>대화 주제 리스트</h3>

      {message ? <p>{message}</p> : <></>}

      <button
        onClick={(e) => {
          e.preventDefault();
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        이전
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (!pageStop) {
            setPage(page + 1);
          }
        }}
      >
        다음
      </button>
      <div>
        {sugguestions.length !== 0 ? (
          sugguestions.map((sugguestion) => (
            <UserSugguestionListTile
              key={sugguestion.id}
              sugguestion={sugguestion}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        이전
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (!pageStop) {
            setPage(page + 1);
          }
        }}
      >
        다음
      </button>
    </div>
  );
};

export default UserSugguestion;

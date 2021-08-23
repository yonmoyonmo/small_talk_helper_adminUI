import React, { useEffect, useState } from "react";
import getSugguestions from "./API/getSugguestions";
import SugguestionListTile from "./SugguestionListTile";

const AdminHome = () => {
  const [sugguestions, setSugguestions] = useState([]);
  const [page, setPage] = useState(1);
  const [pageStop, setPageStop] = useState(false);

  useEffect(() => {
    let mounted = true;
    console.log(page);
    getSugguestions(page).then((fetchedSugguestions) => {
      if (mounted) {
        if (fetchedSugguestions !== undefined) {
          if (fetchedSugguestions.message) {
            setPageStop(true);
            setPage(page-1);
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
    <div>
      <h1>admin home</h1>
      <h3>대화 주제 리스트</h3>
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
            <SugguestionListTile
              key={sugguestion.id}
              sugguestion={sugguestion}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AdminHome;

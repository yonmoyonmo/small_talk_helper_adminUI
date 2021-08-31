import React, { useEffect, useState } from "react";

import getSugguestions from "./API/getSugguestions";
import addNewSugguestion from "./API/addNewSugguestion";

import SugguestionListTile from "./SugguestionListTile";

const AdminHome = () => {
  const [sugguestions, setSugguestions] = useState([]);

  const [page, setPage] = useState(1);
  const [pageStop, setPageStop] = useState(false);

  const [trigger, setTrigger] = useState(false);
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState();

  useEffect(() => {
    let mounted = true;
    getSugguestions(page).then((fetchedSugguestions) => {
      if (mounted) {
        if (fetchedSugguestions !== undefined) {
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

  const newSugguestionSubmit = async (e) => {
    e.preventDefault();
    if (type && content) {
      const result = await addNewSugguestion(type, content);
      console.log(result);
      if (result.success) {
        window.location.reload();
      } else {
        setMessage("실패");
      }
    } else {
      alert("내용을 입력하시오");
    }
  };

  const newSuggForm = (
    <div style={{ margin: "2rem" }}>
      <form onSubmit={newSugguestionSubmit}>
        <div>
          <p>new sugguestion</p>
          <input
            placeholder="type"
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setType(e.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            placeholder="content"
            type="text"
            cols="40"
            rows="5"
            style={{
              lineHeight: 1.5,
              fontSize: "1rem",
            }}
            onChange={(e) => {
              e.preventDefault();
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  return (
    <div>
      <h1>admin home</h1>
      <h3>대화 주제 리스트</h3>

      {message ? <p>{message}</p> : <></>}

      <button
        onClick={(e) => {
          e.preventDefault();
          if (!trigger) setTrigger(true);
          else setTrigger(false);
        }}
      >
        새 대화 주제 추가/안추가
      </button>
      {trigger ? newSuggForm : <></>}

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

export default AdminHome;

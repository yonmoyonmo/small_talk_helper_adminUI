import endpoint from "./endpoint";

export default function getSugguestions(page) {
  return fetch(`${endpoint()}/sugguestion/list?page=${page}&limit=30`).then(
    (data) => data.json()
  );
}

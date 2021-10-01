import endpoint from "./endpoint";

export default function getUserSugguestions(page) {
  return fetch(
    `${endpoint()}/sugguestion/usersugguestions?page=${page}&limit=30`
  ).then((data) => data.json());
}

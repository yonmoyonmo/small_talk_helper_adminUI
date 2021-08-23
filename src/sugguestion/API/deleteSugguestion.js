import endpoint from "./endpoint";

const getToken = () => {
  const tokenString = localStorage.getItem("token");
  const adminToken = JSON.parse(tokenString);
  return adminToken?.token;
};

export default async function deleteSugguestion(id) {
  const token = getToken();
  const result = await fetch(`${endpoint()}/sugguestion/delete`, {
    method: "DELETE",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  }).then((result) => {
    return result.json();
  });
  return result;
}

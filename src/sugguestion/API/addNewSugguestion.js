import endpoint from "./endpoint";

const getToken = () => {
  const tokenString = localStorage.getItem("token");
  const adminToken = JSON.parse(tokenString);
  return adminToken?.token;
};

export default async function addNewSugguestion(type, content) {
  const token = getToken();
  const result = await fetch(`${endpoint()}/sugguestion/register/multiple`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sugguestionText : content,
      type : type
    }),
  }).then((result) => {
    return result.json();
  });
  return result;
}

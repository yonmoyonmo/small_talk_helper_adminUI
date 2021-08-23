const endpoint = "http://localhost:5000"

//http://localhost:5000/sugguestion/list?page=1&limit=20

export default function getSugguestions(page){
  return fetch(`${endpoint}/sugguestion/list?page=${page}&limit=10`).then(data=>data.json());
}
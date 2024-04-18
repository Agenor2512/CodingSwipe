import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export default function sendCandidateLike(info) {
  return client
    .post("/candidates/likes", info)
    .then((response) => {
      console.info(response.data);
    })
    .catch((error) => console.error(error));
}

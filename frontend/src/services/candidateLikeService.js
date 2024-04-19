import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export default function sendCandidateLike(jobOfferId, candidateId) {
  return client
    .post("/candidates/likes", { jobOfferId, candidateId })
    .then((response) => {
      console.info(response.data);
    })
    .catch((error) => console.error(error));
}

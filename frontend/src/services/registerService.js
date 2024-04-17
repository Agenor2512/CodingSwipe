import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const registerCandidate = (candidateInfos) => {
  return client
    .post("/candidates", candidateInfos)
    .then((response) => {
      console.info(response.data);
    })
    .catch((error) => console.error(error));
};

export const registerEnterprise = (enterpriseInfos) => {
  client
    .post("/enterprises", enterpriseInfos)
    .then((response) => console.info(response))
    .catch((error) => console.error(error));
};

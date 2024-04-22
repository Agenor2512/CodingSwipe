import axios from "axios";
import { retrieveToken } from "./loginService";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const readAllResume = () => {
  return client
    .get("/resumes", {
      headers: { Authorization: `Bearer ${retrieveToken()}` },
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const readResumeById = (id) => {
  return client
    .get(`/resumes/${id}`, {
      headers: { Authorization: `Bearer ${retrieveToken()}` },
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

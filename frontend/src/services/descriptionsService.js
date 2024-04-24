import axios from "axios";
import { retrieveToken } from "./loginService";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const readDescriptionById = (id) => {
  return client
    .get(`/descriptions/${id}`, {
      headers: { Authorization: `Bearer ${retrieveToken()}` },
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const modifyDescription = (id, description) => {
  return client
    .put(`/descriptions/${id}`, description)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

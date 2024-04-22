import axios from "axios";
import { retrieveToken } from "./loginService";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const readBiographyById = (id) => {
  return client
    .get(`/biographies/${id}`, {
      headers: { Authorization: `Bearer ${retrieveToken()}` },
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const modifyBiography = (id, biography) => {
  return client
    .put(`/biographies/${id}`, biography)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

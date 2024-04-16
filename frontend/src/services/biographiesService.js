import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const modifyBiography = (id, biography) => {
  return client
    .put(`/biographies/${id}`, biography)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const readBiographyById = (id) => {
  return client
    .get(`/biographies/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

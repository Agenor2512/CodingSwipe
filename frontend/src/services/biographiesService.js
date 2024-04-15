import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const modifyBiography = ({ id, role, description }) => {
  if (role === "candidate") {
    return client
      .put(`/biographies/${id}`, {
        description,
      })
      .then((response) => console.info(response.data))
      .catch((error) => console.error(error));
  }
  return client
    .put(`/descriptions/${id}`, {
      description,
    })
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
};

export const readBiographyById = ({ id, role }) => {
  if (role === "candidate") {
    return client
      .get(`/biographies/${id}`)
      .then((response) => response.data)
      .catch((error) => console.error(error));
  }
  return client
    .get(`/descriptions/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

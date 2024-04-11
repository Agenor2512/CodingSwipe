import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export default function modifyBiography({ id, role, description }) {
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
}

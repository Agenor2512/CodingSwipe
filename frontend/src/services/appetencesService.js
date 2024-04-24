import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export default function readAllAppetences() {
  return client
    .get("/appetences")
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

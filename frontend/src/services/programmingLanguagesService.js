import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export default function readAllProgrammingLanguages() {
  return client
    .get("/programminglanguages")
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

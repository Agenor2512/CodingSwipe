import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export default function logout() {
  return client
    .delete("/logout", {
      withCredentials: true,
    })
    .catch((error) => console.error(error));
}

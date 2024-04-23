import axios from "axios";
import { retrieveToken } from "./loginService";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export default function readMatchesById({ id, role }) {
  if (role === "candidate") {
    return client
      .get(`candidates/matches/${id}`, {
        headers: { Authorization: `Bearer ${retrieveToken()}` },
      })
      .then((response) => response.data)
      .catch((error) => console.error(error));
  }
  return client
    .get(`enterprises/matches/${id}`, {
      headers: { Authorization: `Bearer ${retrieveToken()}` },
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

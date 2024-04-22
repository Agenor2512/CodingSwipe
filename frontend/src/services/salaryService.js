import axios from "axios";
import { retrieveToken } from "./loginService";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const readSalaryById = (id) => {
  return client
    .get(`/wages/${id}`, {
      headers: { Authorization: `Bearer ${retrieveToken()}` },
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const modifySalary = (id, salary) => {
  return client
    .put(`/wages/${id}`, salary)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

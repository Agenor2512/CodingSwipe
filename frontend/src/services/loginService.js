import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const login = ({ email, password }) => {
  return client
    .post(
      "/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const retrieveToken = () => {
  const token = Cookies.get("authentication");
  return token;
};

/* eslint-disable import/prefer-default-export */
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const addUser = (userInformations) => {
  if (userInformations.userRole === "enterprise") {
    client
      .post("/enterprises", {
        ...userInformations,
      })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  } else {
    client
      .post("/candidates", {
        ...userInformations,
      })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  }
};

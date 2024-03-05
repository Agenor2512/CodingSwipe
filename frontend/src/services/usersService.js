/* eslint-disable no-unused-vars */
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

const add = (userInformations) => {
  if (userInformations.userRole === "enterprise") {
    client
      .post("/enterprises", {
        userInformations,
      })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  } else {
    client
      .post("/candidates", {
        userInformations,
      })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  }
};

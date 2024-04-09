const axios = require("axios");

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

const readAllSoftSkills = () => {
  return client
    .get("/softskills")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};
module.exports = { readAllSoftSkills };

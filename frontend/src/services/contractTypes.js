const axios = require("axios");

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

const readAll = () => {
  return client
    .get("/contracttypes")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

module.exports = { readAll };

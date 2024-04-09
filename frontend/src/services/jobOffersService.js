const axios = require("axios");

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

const readAllOffer = () => {
  return client
    .get("/joboffers")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const readOfferById = (id) => {
  return client
    .get(`/joboffers/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

module.exports = { readAllOffer, readOfferById };

import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const readAllOffer = () => {
  return client
    .get("/joboffers")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const readOfferById = (id) => {
  return client
    .get(`/joboffers/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const axios = require("axios");

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

const readAllResume = () => {
  return client
    .get("/resumes")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const readResumeById = (id) => {
  return client
    .get(`/resumes/${id}`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

module.exports = { readAllResume, readResumeById };

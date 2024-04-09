const axios = require("axios");

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

const addExperience = ({ id, job, enterpriseName, experienceDescription }) => {
  return client
    .post(`/experiences`, {
      candidateId: id,
      jobTitle: job,
      company: enterpriseName,
      experience: experienceDescription,
    })
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
};

const destroyExperience = (id) => {
  return client
    .delete(`/experiences/${id}`)
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
};

module.exports = { addExperience, destroyExperience };

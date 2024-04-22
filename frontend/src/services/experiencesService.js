import axios from "axios";
import { retrieveToken } from "./loginService";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const readExperienceById = (id) => {
  return client
    .get(`/experiences/${id}`, {
      headers: { Authorization: `Bearer ${retrieveToken()}` },
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const addExperiences = ({ id, job, company, experienceDescription }) => {
  return client
    .post("/experiences", {
      candidateId: id,
      jobTitle: job,
      company,
      experience: experienceDescription,
    })
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
};

export const destroyExperience = (id) => {
  return client
    .delete(`/experiences/${id}`, {
      headers: { Authorization: `Bearer ${retrieveToken()}` },
    })
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
};

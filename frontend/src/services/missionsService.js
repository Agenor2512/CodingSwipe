import axios from "axios";
import { retrieveToken } from "./loginService";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const readMissionsById = (id) => {
  return client
    .get(`/missions/${id}`, {
      headers: { Authorization: `Bearer ${retrieveToken()}` },
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export const addMissions = ({ id, missionDescription }) => {
  return client
    .post("/missions", {
      enterpriseId: id,
      mission: missionDescription,
    })
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
};

export const destroyMission = (id) => {
  return client
    .delete(`/missions/${id}`, {
      headers: { Authorization: `Bearer ${retrieveToken()}` },
    })
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
};

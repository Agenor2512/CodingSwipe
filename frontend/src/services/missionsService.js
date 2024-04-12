import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const readMissionsById = (id) => {
  return client
    .get(`/missions/${id}`)
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
    .delete(`/missions/${id}`)
    .then((response) => console.info(response.data))
    .catch((error) => console.error(error));
};

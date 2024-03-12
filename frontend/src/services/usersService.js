/* eslint-disable import/prefer-default-export */
import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = axios.create({
  baseURL,
  timeout: 60_000,
});

export const addUser = (userInformations) => {
  if (userInformations.userRole === "enterprise") {
    /* TODO : Préciser que le champ username sera relié au nom de l'entreprise */
    client
      .post("/enterprises", {
        ...userInformations,
        name: userInformations.username,
        department_id: userInformations.department,
        legal_status_id: userInformations.legalStatus,
        business_sectors_id: userInformations.businessSector,
      })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  } else {
    client
      .post("/candidates", {
        ...userInformations,
        firstname: userInformations.username,
        department_id: userInformations.department,
      })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  }
};

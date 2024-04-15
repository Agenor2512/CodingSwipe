/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";

import {
  readBiographyById,
  modifyBiography,
} from "../../services/biographiesService";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/modifyButton.css";

function ModifyButton() {
  const {
    loginUser: { id, role },
  } = useContext(LoginUserContext);

  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const fetchBiography = () => {
    readBiographyById({ id, role }).then(({ biography }) =>
      setDescription(biography)
    );
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // FIXME : sauvegarde de la bio non fonctionnelle
    modifyBiography({ id, role, description }).then(() => fetchBiography());
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    fetchBiography();
  }, []);

  return (
    <div>
      {isEditing ? (
        <>
          <textarea
            type="text"
            value={description}
            onChange={handleChange}
            placeholder="Dites-en plus sur vous"
          />
          <button type="button" onClick={handleSave}>
            Terminé
          </button>
        </>
      ) : (
        <>
          <p>{description}</p>
          <button type="button" onClick={handleEdit}>
            Modifier
          </button>
        </>
      )}
    </div>
  );
}

export default ModifyButton;

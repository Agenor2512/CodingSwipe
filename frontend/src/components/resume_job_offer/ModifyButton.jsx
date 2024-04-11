/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";

import modifyBiography from "../../services/biographiesService";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/modifyButton.css";

function ModifyButton({ candidate }) {
  const {
    loginUser: { id, role },
  } = useContext(LoginUserContext);

  const [description, setDescription] = useState(candidate.biography);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setDescription(description);
  };

  const handleSave = () => {
    setIsEditing(false);
    modifyBiography({ id, role, description });
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

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

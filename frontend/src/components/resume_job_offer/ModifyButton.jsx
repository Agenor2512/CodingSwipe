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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    modifyBiography({ id, role, description });
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    readBiographyById({ id, role }).then((biography) =>
      setDescription(biography)
    );
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
          <p>{description !== undefined ? description : ""}</p>
          <button type="button" onClick={handleEdit}>
            Modifier
          </button>
        </>
      )}
    </div>
  );
}

export default ModifyButton;

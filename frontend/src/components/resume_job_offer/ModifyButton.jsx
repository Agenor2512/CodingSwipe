import React, { useState, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/modifyButton.css";

function ModifyButton({ candidate }) {
  const { loginUser } = useContext(LoginUserContext);

  console.info(candidate);
  const [description, setDescription] = useState(candidate.biography);
  const [isEditing, setIsEditing] = useState(false);

  console.info("CANDIDATE DEPUIS COMPONENT", candidate.biography);

  const updateInfosAboutCandidate = () => {
    axios
      .put(`http://localhost:3310/api/biography/${loginUser.id}`, {
        biography: description,
      })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setDescription(description);
  };

  const handleSave = () => {
    setIsEditing(false);
    updateInfosAboutCandidate();
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

ModifyButton.propTypes = {
  candidate: PropTypes.shape({
    biography: PropTypes.string.isRequired,
  }).isRequired,
};

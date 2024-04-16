/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";

import {
  readBiographyById,
  modifyBiography,
} from "../../services/biographiesService";

import {
  readDescriptionById,
  modifyDescription,
} from "../../services/descriptionsService";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/modifyButton.css";

function ModifyButton() {
  const {
    loginUser: { id, role },
  } = useContext(LoginUserContext);

  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const fetchBiography = () => {
    readBiographyById(id).then(({ biography }) => setContent(biography));
  };

  const fetchDescription = () => {
    readDescriptionById(id).then((response) => {
      const { description } = response;
      setContent(description);
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);

    if (role === "candidate") {
      modifyBiography(id, {
        biography: content,
      }).then(() => fetchBiography());
    } else {
      modifyDescription(id, { description: content }).then(() =>
        fetchDescription()
      );
    }
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  useEffect(() => {
    if (role === "candidate") {
      fetchBiography();
    } else {
      fetchDescription();
    }
  }, []);

  return (
    <div>
      {isEditing ? (
        <>
          <textarea
            type="text"
            value={content}
            onChange={handleChange}
            placeholder="Dites-en plus sur vous"
          />
          <button type="button" onClick={handleSave}>
            Terminé
          </button>
        </>
      ) : (
        <>
          <p>{content}</p>
          <button type="button" onClick={handleEdit}>
            Modifier
          </button>
        </>
      )}
    </div>
  );
}

export default ModifyButton;

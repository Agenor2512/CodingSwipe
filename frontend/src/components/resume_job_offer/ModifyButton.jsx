import React, { useState } from "react";

import "../../styles/resume_job_offer/modifyButton.css";

function ModifyButton() {
  const [description, setDescription] = useState("Récupérer description");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setDescription(description);
  };

  const handleSave = () => {
    setIsEditing(false);
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
            placeholder="Dites aux entreprises qui vous êtes"
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

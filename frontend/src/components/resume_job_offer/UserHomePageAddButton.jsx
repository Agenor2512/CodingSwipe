import { useState } from "react";

import "../../styles/resume_job_offer/userHomePageAddButton.css";

function UserHomePageAddButton() {
  const [experiences, setExperiences] = useState([]);
  const [posteOccupe, setPosteOccupe] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAddExperience = () => {
    if (!posteOccupe || !entreprise || !description) {
      // eslint-disable-next-line no-alert
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const newExperience = {
      posteOccupe,
      entreprise,
      description,
    };
    setExperiences([...experiences, newExperience]);

    setPosteOccupe("");
    setEntreprise("");
    setDescription("");

    setShowModal(false);
  };

  return (
    <div>
      <button type="button" onClick={() => setShowModal(true)}>
        Ajouter
      </button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h1>AJOUTER UNE EXPÉRIENCE PROFESSIONNELLE</h1>
            <div className="form-group">
              <label htmlFor="posteOccupe">Poste occupé:</label>
              <input
                type="text"
                id="posteOccupe"
                value={posteOccupe}
                onChange={(e) => setPosteOccupe(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="entreprise">Entreprise:</label>
              <input
                type="text"
                id="entreprise"
                value={entreprise}
                onChange={(e) => setEntreprise(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description des activités:</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="button" onClick={handleAddExperience}>
              Ajouter
            </button>
            <button
              className="close-btn"
              type="button"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}

      <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <h2>{experience.posteOccupe}</h2>
            <p>Entreprise: {experience.entreprise}</p>
            <p>Description: {experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserHomePageAddButton;

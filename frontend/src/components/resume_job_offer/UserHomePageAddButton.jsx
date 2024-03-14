import React, { useState } from "react";
import "../../styles/resume_job_offer/userHomePageAddButton.css";

function ExperienceModal() {
  const [modal, setModal] = useState(false);
  const [poste, setPoste] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [description, setDescription] = useState("");

  const handleModal = () => setModal(true);
  const handleClose = () => setModal(false);

  const handleAddExperience = () => {
    setPoste("");
    setEntreprise("");
    setDescription("");
    handleClose();
  };

  return (
    <section className="add_buton">
      <button type="button" onClick={handleModal}>
        Ajouter
      </button>

      {modal && (
        <div className="overlay">
          <div className="modal_container">
            <button type="button" className="close-btn" onClick={handleClose}>
              &times;
            </button>
            <h2>Ajouter une expérience professionnelle</h2>
            <form>
              <div className="form-group">
                <label htmlFor="poste">Poste occupé</label>
                <input
                  type="text"
                  id="poste"
                  value={poste}
                  onChange={(e) => setPoste(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="entreprise">Entreprise</label>
                <input
                  type="text"
                  id="entreprise"
                  value={entreprise}
                  onChange={(e) => setEntreprise(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description des activités</label>
                <textarea
                  id="description"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button type="button" onClick={handleAddExperience}>
                Ajouter
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default ExperienceModal;

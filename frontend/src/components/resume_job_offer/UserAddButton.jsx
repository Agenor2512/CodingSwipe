import { useState } from "react";
import "../../styles/resume_job_offer/userAddButton.css";

function UserAddButton() {
  const [modal, setModal] = useState(false);
  const [poste, setPoste] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [userDescription, setUserDescription] = useState("");

  const [experiences, setExperiences] = useState([]);

  const handleModal = () => setModal(true);
  const handleClose = () => setModal(false);

  const handleAddUserExperience = () => {
    const newExperience = {
      poste,
      entreprise,
      userDescription,
    };
    setExperiences([...experiences, newExperience]);
    setPoste("");
    setEntreprise("");
    setUserDescription("");
    handleClose();
  };

  return (
    <section>
      {experiences.map((experience) => (
        <div className="experience">
          {experience.poste}
          {experience.entreprise}
          {experience.userDescription}
        </div>
      ))}
      <button type="button" className="add_button" onClick={handleModal}>
        Ajouter
      </button>

      {modal && (
        <div className="overlay">
          <div className="modal_container">
            <button type="button" className="close_btn" onClick={handleClose}>
              &times;
            </button>
            <h2>AJOUTER UNE EXPÉRIENCE PROFESSIONNELLE</h2>
            <form>
              <div className="form_group">
                <label htmlFor="poste">Poste occupé</label>
                <input
                  type="text"
                  value={poste}
                  onChange={(event) => setPoste(event.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="entreprise">Entreprise</label>
                <input
                  type="text"
                  value={entreprise}
                  onChange={(event) => setEntreprise(event.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="description">Description des activités</label>
                <textarea
                  rows="3"
                  value={userDescription}
                  onChange={(event) => setUserDescription(event.target.value)}
                />
              </div>
              <button type="button" onClick={handleAddUserExperience}>
                Ajouter
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default UserAddButton;

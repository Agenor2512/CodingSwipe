/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import axios from "axios";
import "../../styles/resume_job_offer/userAddButton.css";
import LoginUserContext from "../../context/LoginUserContext";

function UserAddButton({ candidate, readInfosAboutCandidate }) {
  console.info("candidate", candidate);
  const { loginUser } = useContext(LoginUserContext);

  const [modal, setModal] = useState(false);
  const [poste, setPoste] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [userDescription, setUserDescription] = useState("");

  const addExperiences = () => {
    axios
      .post(`http://localhost:3310/api/experience`, {
        candidateId: loginUser.id,
        jobTitle: poste,
        company: entreprise,
        experience: userDescription,
      })
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };

  const removeExperience = (id) => {
    axios
      .delete(`http://localhost:3310/api/experience/${id}`)
      .then(() => readInfosAboutCandidate())
      .catch((error) => console.error(error));
  };

  const handleModal = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <section>
      {candidate.experience.map((experience) => (
        <ul>
          <li className="job_title">{experience.job_title}</li>
          <li>{experience.company}</li>
          <li>{experience.experiences}</li>
          <button type="button" onClick={() => removeExperience(experience.id)}>
            &times;
          </button>
        </ul>
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
              <button type="button" onClick={addExperiences}>
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

/* eslint-disable react/prop-types */
import { useContext, useState } from "react";

import {
  addExperiences,
  destroyExperience,
} from "../../services/experiencesService";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/addExperienceButton.css";

function AddExperienceButton({ experiences }) {
  const {
    loginUser: { id },
  } = useContext(LoginUserContext);

  const [modal, setModal] = useState(false);
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [experienceDescription, setExperienceDescription] = useState([]);

  const handleModal = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <section>
      {experiences.experience.map((xp) => (
        <ul>
          <li className="job_title">{xp.job_title}</li>
          <li>{xp.company}</li>
          <li>{xp.experienceDescription}</li>
          <button type="button" onClick={() => destroyExperience(xp.id)}>
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
                <label htmlFor="job">Poste occupé</label>
                <input
                  id="job"
                  name="job"
                  type="text"
                  value={job}
                  onChange={(event) => setJob(event.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="enterprise">Entreprise</label>
                <input
                  id="enterprise"
                  name="enterprise"
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="description">Description des activités</label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={experienceDescription}
                  onChange={(event) =>
                    setExperienceDescription(event.target.value)
                  }
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  addExperiences({ id, job, company, experienceDescription })
                }
              >
                Ajouter
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default AddExperienceButton;

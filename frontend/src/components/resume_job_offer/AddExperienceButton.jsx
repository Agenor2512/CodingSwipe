/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";

import {
  readExperienceById,
  addExperiences,
  destroyExperience,
} from "../../services/experiencesService";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/addExperienceButton.css";

function AddExperienceButton() {
  const {
    loginUser: { id },
  } = useContext(LoginUserContext);

  const [modal, setModal] = useState(false);
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [experienceDescription, setExperienceDescription] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const handleModal = () => setModal(true);
  const handleClose = () => setModal(false);

  const fetchExperience = () => {
    readExperienceById(id).then((candidateExperiences) =>
      setExperiences(candidateExperiences)
    );
  };

  const handleAddExperience = () => {
    addExperiences({ id, job, company, experienceDescription })
      .then(() => handleClose())
      .then(() => fetchExperience());
  };

  const handleDeleteExperience = (experienceId) => {
    destroyExperience(experienceId).then(() => fetchExperience());
  };

  useEffect(() => {
    fetchExperience();
  }, []);

  return (
    <section>
      {experiences.map((experience) => (
        <ul key={experience.id}>
          <li className="job_title">{experience.job_title}</li>
          <li>{experience.company}</li>
          <li>{experience.experienceDescription}</li>
          <button
            type="button"
            onClick={() => handleDeleteExperience(experience.id)}
          >
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
              <button type="button" onClick={() => handleAddExperience()}>
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

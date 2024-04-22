import { useState, useContext } from "react";
import PropTypes from "prop-types";
import deleteIcon from "../../assets/red_trash_can.png";

import {
  readExperienceById,
  destroyExperience,
} from "../../services/experiencesService";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/deleteExperienceButton.css";

function DeleteExperienceButton({ setExperiences, experienceId }) {
  const {
    loginUser: { id },
  } = useContext(LoginUserContext);

  const [modal, setModal] = useState(false);

  const fetchExperience = () => {
    readExperienceById(id).then((candidateExperiences) =>
      setExperiences(candidateExperiences)
    );
  };

  const handleDeleteExperience = () => {
    destroyExperience(experienceId).then(() => fetchExperience());
    setModal(false);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <section>
      <div className="experience_content">
        <button type="button" onClick={() => toggleModal()}>
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      </div>
      {modal && (
        <div className="overlay">
          <div className="modal_container">
            <p>Êtes-vous sûr de vouloir supprimer cette expérience ?</p>
            <div className="modal_buttons">
              <button
                type="button"
                className="delete_button"
                onClick={handleDeleteExperience}
              >
                Supprimer
              </button>
              <button
                type="button"
                className="return_profil"
                onClick={() => setModal(false)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

DeleteExperienceButton.propTypes = {
  setExperiences: PropTypes.func.isRequired,
  experienceId: PropTypes.number.isRequired,
};

export default DeleteExperienceButton;

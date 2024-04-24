/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unknown-property */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import {
  readExperienceById,
  destroyExperience,
} from "../../services/experiencesService";
import {
  readMissionsById,
  destroyMission,
} from "../../services/missionsService";

import LoginUserContext from "../../context/LoginUserContext";

import deleteIcon from "../../assets/red_trash_can.png";

import "../../styles/resume_job_offer/deleteButton.css";

function DeleteButton({
  setExperiences,
  experienceId,
  setMissions,
  missionId,
}) {
  const {
    loginUser: { id, role },
  } = useContext(LoginUserContext);

  const [modal, setModal] = useState(false);

  const fetchExperience = () => {
    readExperienceById(id).then((candidateExperiences) =>
      setExperiences(candidateExperiences)
    );
  };

  const fetchMission = () => {
    readMissionsById(id).then((enterpriseMissions) =>
      setMissions(enterpriseMissions)
    );
  };

  const handleDelete = () => {
    if (role === "candidate") {
      destroyExperience(experienceId).then(() => fetchExperience());
      setModal(false);
    } else {
      destroyMission(missionId).then(() => fetchMission());
      setModal(false);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button
        type="button"
        className="delete_experiences_missions"
        onClick={() => toggleModal()}
      >
        <img src={deleteIcon} alt="delete-icon" />
      </button>

      {modal && (
        <div className="overlay">
          <div className="modal_container">
            <p>Êtes-vous sûr de vouloir la supprimer ?</p>
            <div className="modal_buttons">
              <button
                type="button"
                className="delete_button"
                onClick={handleDelete}
              >
                Supprimer
              </button>
              <button
                type="button"
                useContext
                className="return_profil"
                onClick={() => setModal(false)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

DeleteButton.propTypes = {
  setExperiences: PropTypes.func,
  experienceId: PropTypes.number,
  setMissions: PropTypes.func,
  missionId: PropTypes.func,
};

export default DeleteButton;

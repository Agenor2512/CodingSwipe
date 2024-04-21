import { useState, useContext, useEffect } from "react";

import deleteIcon from "../../assets/red_trash_can.png";

import {
  readMissionsById,
  addMissions,
  destroyMission,
} from "../../services/missionsService";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/addMissionButton.css";

function AddMissionButton() {
  const {
    loginUser: { id },
  } = useContext(LoginUserContext);

  const [modal, setModal] = useState(false);
  const [missionDescription, setMissionDescription] = useState([]);
  const [missions, setMissions] = useState([]);

  const handleModal = () => setModal(true);
  const handleClose = () => setModal(false);

  const fetchMission = () => {
    readMissionsById(id).then((enterpriseMissions) =>
      setMissions(enterpriseMissions)
    );
  };

  const handleAddEnterpriseMission = () => {
    addMissions({ id, missionDescription })
      .then(() => handleClose())
      .then(() => fetchMission());
  };

  const handleDeleteMission = (experienceId) => {
    destroyMission(experienceId).then(() => fetchMission());
  };

  useEffect(() => {
    fetchMission();
  }, []);

  return (
    <section className="enterprise_modal">
      {missions.map((mission) => (
        <ul key={mission.id}>
          <li className="experience">{mission.missions}</li>
          <button type="button" onClick={() => handleDeleteMission(mission.id)}>
            <img src={deleteIcon} alt="delete-icon" />
          </button>
        </ul>
      ))}
      <button
        type="button"
        className="add_enterprise_button"
        onClick={handleModal}
      >
        Ajouter
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal_container_enterprise">
            <button type="button" onClick={handleClose}>
              &times;
            </button>
            <h2>AJOUTER LA MISSION</h2>
            <form>
              <div className="form_group_enterprise">
                <label htmlFor="description">Description de la mission</label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={missionDescription}
                  onChange={(event) =>
                    setMissionDescription(event.target.value)
                  }
                />
              </div>
              <button
                className="add_enterprise_button"
                type="button"
                onClick={handleAddEnterpriseMission}
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

export default AddMissionButton;

import { useState } from "react";

import "../../styles/resume_job_offer/addMissionButton.css";

function AddMissionButton() {
  const [modal, setModal] = useState(false);
  const [enterpriseMission, setEnterpriseMission] = useState("");
  const [experiences, setExperiences] = useState([]);

  const handleModal = () => setModal(true);
  const handleClose = () => setModal(false);

  const handleAddEnterpriseExperience = () => {
    const newExperience = {
      enterpriseMission,
    };
    setExperiences([...experiences, newExperience]);
    setEnterpriseMission("");
    handleClose();
  };

  return (
    <section className="enterprise_modal">
      {experiences.map((experience) => (
        <div className="experience">{experience.enterpriseMission}</div>
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
                  rows="3"
                  value={enterpriseMission}
                  onChange={(event) => setEnterpriseMission(event.target.value)}
                />
              </div>
              <button
                className="add_enterprise_button"
                type="button"
                onClick={handleAddEnterpriseExperience}
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

import { useState } from "react";

function AddEnterpriseMissionButton() {
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
    <section>
      {experiences.map((experience) => (
        <div className="experience">{experience.enterpriseMission}</div>
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
            <h2>AJOUTER LA MISSION</h2>
            <form>
              <div className="form_group">
                <label htmlFor="description">Description de la mission</label>
                <textarea
                  id="description"
                  rows="3"
                  value={enterpriseMission}
                  onChange={(event) => setEnterpriseMission(event.target.value)}
                />
              </div>
              <button type="button" onClick={handleAddEnterpriseExperience}>
                Ajouter
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default AddEnterpriseMissionButton;

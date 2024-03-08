import { useState } from "react";
import deleteIcon from "../../assets/red_crash.png";
import "../../styles/resume_job_offer/deleteExperienceButton.css";

function DeleteExperienceButton() {
  const [experienceUser, setExperienceUser] = useState([
    {
      id: 1,
      post: "Développer et maintenir des applications web de haute qualité en utilisant JavaScript et ses frameworks associés (par ex. React, Vue.js, Node.js).",
    },
    {
      id: 2,
      post: "Collaborer étroitement avec l'équipe de conception UX/UI pour transformer les maquettes en interfaces réactives et performantes.",
    },
  ]);

  const [modal, setModal] = useState(false);
  const [experienceIdToDelete, setExperienceIdToDelete] = useState(null);

  const handleDeleteExperience = () => {
    const updatedExperiences = experienceUser.filter(
      (experience) => experience.id !== experienceIdToDelete
    );
    setExperienceUser(updatedExperiences);
    setModal(false);
  };

  const toggleModal = (id) => {
    setExperienceIdToDelete(id);
    setModal(!modal);
  };

  return (
    <section>
      <div className="experience_container">
        {experienceUser.map((experience) => (
          <div className="experience_content" key={experience.id}>
            <div className="square"> </div>
            <p className="text_button">
              {experience.post}
              <button
                type="button"
                className="crash_button"
                onClick={() => toggleModal(experience.id)}
              >
                <img src={deleteIcon} alt="delete-icon" />
              </button>
            </p>
          </div>
        ))}
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

export default DeleteExperienceButton;

import React from "react";

import "../../styles/resume_job_offer/MessageBox.css";

function MessagesBox() {
  return (
    <section className="user_message">
      <div>
        <div className="candidate_infos_header">
          <div>W</div>
          <h1>Développeur/Développeuse</h1>
        </div>

        <div className="send_text_Button">
          <button type="button" className="send_button">
            Envoyer
          </button>
          <input className="texte_area" type="text" id="text" />
        </div>
      </div>

      <section className="button_see_advert">
        <button type="button">Voir l'annonce</button>
      </section>
    </section>
  );
}

export default MessagesBox;

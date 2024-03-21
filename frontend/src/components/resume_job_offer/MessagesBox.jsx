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
        <div className="messages" />

        <div className="send_text_button">
          <input type="text" id="text" />
          <button type="button">Envoyer</button>
        </div>
      </div>

      <section className="see_content">
        <button type="button">Voir l'annonce</button>
      </section>
    </section>
  );
}

export default MessagesBox;

import React from "react";

import messageBoxBackground from "../../assets/background_swipe_mobile.png";
import "../../styles/resume_job_offer/messageBox.css";

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
        <img src={messageBoxBackground} alt="messages bottom background" />
        <button type="button">Voir l'annonce</button>
      </section>
    </section>
  );
}

export default MessagesBox;

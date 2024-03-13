import React from "react";
import "../../styles/message_box/MessageBox.css";

function MessagesBox() {
  return (
    <section className="swipe_system_container">
      <div className="send_text_Button">
        <button type="button" className="send_button">
          Envoyer
        </button>
        <input className="texte_area" type="text" id="text" />
      </div>

      <div className="button_see_advert">
        <button type="button">Voir l'annonce</button>
      </div>
    </section>
  );
}

export default MessagesBox;

import React from "react";
import "../../styles/message_box/MessageBox.css";

function MessagesBox() {
  return (
    <section className="message_box">
      <div>Bulle1</div>
      <div>Bulle2</div>
      <div className="message_area">
        <textarea id="message" name="message" />
        <button className="send" type="button">
          Envoyer
        </button>
      </div>
      <section className="footer_message">
        <button className="check_advert" type="button">
          Voir l'annonce
        </button>
        <div className="background" />
      </section>
    </section>
  );
}

export default MessagesBox;

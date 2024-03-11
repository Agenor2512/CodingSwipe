import React from "react";
import "../../styles/message_box/MessageBox.css";

function MessagesBox() {
  return (
    <>
      <section className="write_text">
        <div>
          <input className="texte_area" type="text" id="text" />
        </div>
        <div className="send">
          <button type="button">Envoyer</button>
        </div>
      </section>
      <section className="check_advert">
        <div>
          <button type="button">Voir l'annonce</button>
        </div>
      </section>
    </>
  );
}

export default MessagesBox;

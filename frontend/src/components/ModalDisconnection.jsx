import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/components/modalDisconnection.css";

function ModalDisconnection() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalOnce = () => {
    setModal(true);
  };

  return (
    <>
      <button
        type="button"
        className="disconnection_button"
        onClick={toggleModalOnce}
      >
        Se déconnecter
      </button>
      {modal && (
        <div className="overlay">
          <dialog className="disconnection_modal" open={modal}>
            <section className="disconnection_modal_content">
              <h2>Êtes-vous sûr de vouloir vous déconnecter ?</h2>
              <div className="disconnection_redirection_buttons">
                <Link to="/">
                  <button type="button">Se déconnecter</button>
                </Link>
                <button type="button" onClick={toggleModal}>
                  Annuler
                </button>
              </div>
            </section>
          </dialog>
        </div>
      )}
    </>
  );
}

export default ModalDisconnection;

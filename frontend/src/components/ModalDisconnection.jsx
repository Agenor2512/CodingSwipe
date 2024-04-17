import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import logout from "../services/logoutService";

import LoginUserContext from "../context/LoginUserContext";

import "../styles/components/modalDisconnection.css";

function ModalDisconnection() {
  const [modal, setModal] = useState(false);

  const { setLoginUser } = useContext(LoginUserContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalOnce = () => {
    setModal(true);
  };

  const navigate = useNavigate();

  const disconnect = (event) => {
    event.preventDefault();

    logout().then(() => {
      setLoginUser({
        id: null,
        role: null,
        email: null,
      });
      navigate("/");
    });
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
                <button
                  className="disconnected"
                  type="button"
                  onClick={disconnect}
                >
                  Se déconnecter
                </button>

                <button className="cancel" type="button" onClick={toggleModal}>
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

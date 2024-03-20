import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import LoginUserContext from "../context/LoginUserContext";

import "../styles/components/modalDisconnection.css";

function ModalDisconnection() {
  const baseURL = import.meta.env.VITE_BACKEND_URL;

  const client = axios.create({
    baseURL,
    timeout: 60_000,
  });

  const [modal, setModal] = useState(false);

  const { setLoginUser } = useContext(LoginUserContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalOnce = () => {
    setModal(true);
  };

  const logout = (event) => {
    event.preventDefault();

    client
      .delete("/login", {
        withCredentials: true,
      })
      .then(() => {
        setLoginUser({
          id: null,
          role: null,
          email: null,
        });
      })
      .catch((error) => console.error(error));
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
                  <button type="button" onClick={logout}>
                    Se déconnecter
                  </button>
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

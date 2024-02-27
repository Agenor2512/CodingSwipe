import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/components/modalConnection.css";

function ModalConnection() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalOnce = () => {
    setModal(true);
  };

  return (
    <>
      <section className="connection_button_container">
        <button
          type="button"
          className="connection_button"
          onClick={toggleModalOnce}
        >
          Se connecter
        </button>
      </section>
      {modal && (
        <div className="overlay">
          <dialog className="connection_modal">
            <form className="connection_modal_content">
              <h2>SE CONNECTER</h2>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="exemple@gmail.com"
                pattern="[chiffres/lettres/tiret]@[lettres].[lettres]"
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Saisissez votre mot de passe"
                minLength="8"
              />
              <Link to="/">
                <input type="submit" className="continue" value="Continuer" />
              </Link>
            </form>
            <button type="button" onClick={toggleModal}>
              &times;
            </button>
          </dialog>
        </div>
      )}
    </>
  );
}

export default ModalConnection;

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { logUser } from "../services/usersService";

import LoginUserContext from "../context/LoginUserContext";

import "../styles/components/modalConnection.css";

function ModalConnection() {
  const [modal, setModal] = useState(false);
  const { loginUser, setLoginUser } = useContext(LoginUserContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalOnce = () => {
    setModal(true);
  };

  const handleFormChange = (key, { target: { value } }) => {
    setLoginUser({
      ...loginUser,
      [key]: value,
    });
  };

  const logThenRedirect = () => {
    const requestBody = {
      ...loginUser,
    };

    logUser({ ...requestBody });
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
                onChange={(event) => handleFormChange("email", event)}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Saisissez votre mot de passe"
                minLength="8"
                onChange={(event) => handleFormChange("password", event)}
              />
              <Link to="/UsersHomePage">
                <input
                  type="submit"
                  className="continue"
                  value="Continuer"
                  onClick={logThenRedirect}
                />
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

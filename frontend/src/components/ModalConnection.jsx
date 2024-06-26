import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../services/loginService";

import LoginUserContext from "../context/LoginUserContext";

import "../styles/components/modalConnection.css";

function ModalConnection() {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLoginUser } = useContext(LoginUserContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalOnce = () => {
    setModal(true);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();

    login({ email, password }).then((response) => {
      setLoginUser({
        id: response.id,
        role: response.role,
        email: response.email,
      });
      navigate("/usershomepage/profile");
    });
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
            <form className="connection_modal_content" onSubmit={submitForm}>
              <h2>SE CONNECTER</h2>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="exemple@gmail.com"
                onChange={handleChangeEmail}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Saisissez votre mot de passe"
                onChange={handleChangePassword}
              />
              <button type="submit">Continuer</button>
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

import { useState } from "react";
import { Link } from "react-router-dom";
import ModalConnection from "./ModalConnection";

import "../styles/thirdStepAccountCreation.css";

function AccountCreation() {
  const [setModal] = useState(false);

  const toggleModalOnce = () => {
    setModal(true);
  };

  return (
    <div>
      <h3> Crée Un Compte</h3>
      <div className="connect">
        <div className="square"> </div>
        <p>
          INSCRIPTION TERMINÉE <span>-</span> Rendez vous sur l’espace{" "}
          <span>connexion</span>.
        </p>
      </div>
      <Link to="/modal-connection">
        <button
          type="button"
          className="connection_button"
          onClick={toggleModalOnce}
        >
          Me connecter
        </button>
      </Link>
      <ModalConnection />
    </div>
  );
}

export default AccountCreation;

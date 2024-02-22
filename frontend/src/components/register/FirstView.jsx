import { useState } from "react";
import "../../styles/firstViewRegisterForm.css";

import PropTypes from "prop-types";

function FirstView({ formTools }) {
  const [focusedButton, setFocusedButton] = useState("enterprise");
  const selectionButtons = [
    {
      name: "enterprise",
      buttonText: "Je suis une entreprise",
    },
    {
      name: "candidate",
      buttonText: "Je recherche un emploi",
    },
  ];

  const handleClickButton = (event) => {
    setFocusedButton(event.target.name);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="form_container">
      <form onSubmit={handleFormSubmit}>
        <h1>Créer Un Compte</h1>
        <h3>Sélectionnez votre statut</h3>
        <div>
          {selectionButtons.map(({ name, buttonText }) => (
            <button
              key={name}
              name={name}
              type="button"
              className={focusedButton === name ? "focusedButton" : ""}
              onClick={handleClickButton}
            >
              {buttonText}
            </button>
          ))}
        </div>
        <input type="submit" value="Continuer" onClick={formTools.nextStep} />
      </form>
    </section>
  );
}

FirstView.propTypes = {
  formTools: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
  }).isRequired,
};

export default FirstView;

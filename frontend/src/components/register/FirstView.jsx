/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "../../styles/register/firstViewRegisterForm.css";

import RegisterContext from "../../context/RegisterContext";

function FirstView({ formTools: { nextStep, handleFormSubmit } }) {
  const { setUserRole } = useContext(RegisterContext);
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
    setUserRole(event.target.name);
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
        <input type="submit" value="Continuer" onClick={nextStep} />
      </form>
    </section>
  );
}

export default FirstView;

import React from "react";

import "../../styles/firstViewRegisterForm.css";

function FirstView() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="form_container">
      <form onSubmit={handleFormSubmit}>
        <h1>Créer Un Compte</h1>
        <h3>Sélectionnez votre statut</h3>
        <div>
          <button type="button">Je suis une entreprise</button>
          <button type="button">Je recherche un emploi</button>
        </div>
        <input type="submit" value="Continuer" />
      </form>
    </section>
  );
}

export default FirstView;

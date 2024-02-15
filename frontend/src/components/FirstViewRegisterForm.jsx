import React from "react";

function FirstViewRegisterForm() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Créer un compte</h1>
      <h3>Sélectionnez votre statut</h3>
      <button type="button">Je suis une entreprise</button>
      <button type="button">Je recherche un emploi</button>
      <input type="submit" value="Continuer" />
    </form>
  );
}

export default FirstViewRegisterForm;

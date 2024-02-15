import React from "react";
import { Link } from "react-router-dom";

function RegisterButton() {
  return (
    <Link to="/register">
      <button type="button">Créer un compte</button>
    </Link>
  );
}

export default RegisterButton;

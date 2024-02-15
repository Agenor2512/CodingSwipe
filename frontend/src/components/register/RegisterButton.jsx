import React from "react";
import { Link } from "react-router-dom";

import "../../styles/registerButton.css";

function RegisterButton() {
  return (
    <Link to="/register">
      <button type="button" className="register_button">
        Créer un compte
      </button>
    </Link>
  );
}

export default RegisterButton;

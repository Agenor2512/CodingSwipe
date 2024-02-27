import React from "react";
import { Link } from "react-router-dom";

import "../../styles/register/registerButton.css";

function RegisterButton() {
  return (
    <Link to="/register" className="link_register_button">
      <button type="button" className="register_button">
        Créer un compte
      </button>
    </Link>
  );
}

export default RegisterButton;

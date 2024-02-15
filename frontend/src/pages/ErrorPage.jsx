import React from "react";
import { Link } from "react-router-dom";

import notFoundIcon from "../assets/404_error.png";
import homeIcon from "../assets/home_icon.png";

function ErrorPage() {
  return (
    <>
      <img
        src={notFoundIcon}
        alt="Computer icon with a 404 error on the screen"
      />
      <h1>404 NotFound</h1>
      <p>Malheureusement, l'élément auquel vous voulez accéder n'existe pas.</p>
      <div>
        <Link to="/">
          <img src={homeIcon} alt="Home icon" />
          <p>Retour à l'accueil</p>
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;

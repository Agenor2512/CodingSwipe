/* eslint-disable react/prop-types */
import ModalConnection from "../ModalConnection";

import "../../styles/register/finalStepView.css";

function FinalStepView() {
  return (
    <div className="final_step_container">
      <h3> Créer Un Compte</h3>
      <div className="subtitle">
        <div className="square" />
        <p>
          INSCRIPTION TERMINÉE &nbsp; <span>-</span>&nbsp; Rendez vous sur
          l’espace &nbsp;
          <span>connexion</span>.
        </p>
      </div>
      <ModalConnection />
    </div>
  );
}

export default FinalStepView;

import PropTypes from "prop-types";

import ModalConnection from "../ModalConnection";

import "../../styles/finalStepView.css";

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

FinalStepView.propTypes = {
  formTools: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
  }).isRequired,
};

export default FinalStepView;

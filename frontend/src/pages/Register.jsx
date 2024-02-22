import React, { useState } from "react";
import PropTypes from "prop-types";

import FirstView from "../components/register/FirstView";
import EnterpriseStepOne from "../components/register/EnterpriseStepOne";
import EnterpriseStepTwo from "../components/register/EnterpriseStepTwo";
import FinalStepView from "../components/register/FinalStepView";

function Register() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const displayRegisterStep = () => {
    if (step === 1) {
      return <FirstView formTools={{ nextStep }} />;
    }
    if (step === 2) {
      return <EnterpriseStepOne formTools={{ nextStep }} />;
    }
    if (step === 3) {
      return <EnterpriseStepTwo formTools={{ nextStep }} />;
    }
    return <FinalStepView />;
  };

  return <form>{displayRegisterStep()}</form>;
}

Register.propTypes = {
  formTools: PropTypes.shape({
    nextStep: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;

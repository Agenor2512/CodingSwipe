/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";

import FirstView from "../components/register/FirstView";
import EnterpriseStepOne from "../components/register/EnterpriseStepOne";
import EnterpriseStepTwo from "../components/register/EnterpriseStepTwo";
import CandidateStepOne from "../components/register/CandidateStepOne";
import CandidateStepTwo from "../components/register/CandidateStepTwo";
import FinalStepView from "../components/register/FinalStepView";
import RegisterContext from "../context/RegisterContext";

function Register() {
  const user = useContext(RegisterContext);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const displayRegisterStep = () => {
    switch (step) {
      case 1:
        return <FirstView formTools={{ nextStep, handleFormSubmit }} />;
      case 2:
        return user.userRole === "enterprise" ? (
          <EnterpriseStepOne formTools={{ nextStep, handleFormSubmit }} />
        ) : (
          <CandidateStepOne formTools={{ nextStep, handleFormSubmit }} />
        );
      case 3:
        return user.userRole === "enterprise" ? (
          <EnterpriseStepTwo formTools={{ nextStep, handleFormSubmit }} />
        ) : (
          <CandidateStepTwo formTools={{ nextStep, handleFormSubmit }} />
        );
      case 4:
        return <FinalStepView />;
      default:
        return <FirstView formTools={{ nextStep, handleFormSubmit }} />;
    }
  };

  return <div>{displayRegisterStep()}</div>;
}

export default Register;

/* eslint-disable react/prop-types */
import React, { useState } from "react";

import axios from "axios";

import FirstView from "../components/register/FirstView";
import EnterpriseStepOne from "../components/register/EnterpriseStepOne";
import EnterpriseStepTwo from "../components/register/EnterpriseStepTwo";
import CandidateStepOne from "../components/register/CandidateStepOne";
import CandidateStepTwo from "../components/register/CandidateStepTwo";
import FinalStepView from "../components/register/FinalStepView";

function Register() {
  const [step, setStep] = useState(1);

  const [role, setRole] = useState("enterprise");

  const [candidateInfos, setCandidateInfos] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    departmentId: "",
    biography: "",
    appetencesId: "",
    contractTypesId: "",
    workRhythmsId: "",
    levelId: "",
    languages: [],
  });

  const handleChangeForm = (event) => {
    setCandidateInfos({
      ...candidateInfos,
      [event.target.name]: event.target.value,
    });
  };

  // const handleChangeForm = (event) => {
  //   setEnterpriseInfos({
  //     ...enterpriseInfos,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const registerCandidate = () => {
    axios
      .post("http://localhost:3310/api/candidates", candidateInfos)
      .then((response) => console.info(response))
      .catch((error) => console.error(error));
  };

  const displayRegisterStep = () => {
    switch (step) {
      case 1:
        return (
          <FirstView formTools={{ nextStep, handleFormSubmit, setRole }} />
        );
      case 2:
        return role === "enterprise" ? (
          <EnterpriseStepOne formTools={{ nextStep, handleFormSubmit }} />
        ) : (
          <CandidateStepOne
            formTools={{ nextStep, handleFormSubmit, handleChangeForm }}
          />
        );
      case 3:
        return role === "enterprise" ? (
          <EnterpriseStepTwo
            formTools={{
              nextStep,
              handleFormSubmit,
              handleChangeForm,
            }}
          />
        ) : (
          <CandidateStepTwo
            formTools={{
              nextStep,
              handleFormSubmit,
              registerCandidate,
              handleChangeForm,
              setCandidateInfos,
            }}
          />
        );
      case 4:
        return <FinalStepView />;
      default:
        return (
          <FirstView formTools={{ nextStep, handleFormSubmit, setRole }} />
        );
    }
  };

  return <div>{displayRegisterStep()}</div>;
}

export default Register;

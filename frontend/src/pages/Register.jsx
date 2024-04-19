import React, { useState } from "react";

import {
  registerCandidate,
  registerEnterprise,
} from "../services/registerService";

import FirstView from "../components/register/FirstView";
import EnterpriseStepOne from "../components/register/EnterpriseStepOne";
import EnterpriseStepTwo from "../components/register/EnterpriseStepTwo";
import CandidateStepOne from "../components/register/CandidateStepOne";
import CandidateStepTwo from "../components/register/CandidateStepTwo";
import FinalStepView from "../components/register/FinalStepView";

function Register() {
  const [step, setStep] = useState(1);
  const [formIsFilled, setFormIsFilled] = useState(false);
  const [role, setRole] = useState("enterprise");

  const [candidateInfos, setCandidateInfos] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordCheck: "",
    departmentId: "",
    appetencesId: "1",
    contractTypesId: "",
    workRhythmsId: "",
    levelId: "1",
    languages: [],
  });

  const [enterpriseInfos, setEnterpriseInfos] = useState({
    name: "",
    siret: "",
    description: "",
    email: "",
    password: "",
    passwordCheck: "",
    departmentId: "",
    legalStatusId: "",
    businessSectorsId: "",
    salary: "",
    contractTypesId: "",
    workRhythmsId: "",
    appetencesId: "1",
    languages: [],
  });

  console.info("ENTREPRISE INFOS: ", enterpriseInfos);

  const handleChangeFormCandidate = (event) => {
    setCandidateInfos({
      ...candidateInfos,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeFormEnterprise = (event) => {
    setEnterpriseInfos({
      ...enterpriseInfos,
      [event.target.name]: event.target.value,
    });
  };

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const sendCandidateInfos = () => {
    registerCandidate(candidateInfos);
    nextStep();
  };

  const sendEnterpriseInfos = () => {
    registerEnterprise(enterpriseInfos);
    nextStep();
  };

  const displayRegisterStep = () => {
    switch (step) {
      case 1:
        return (
          <FirstView formTools={{ nextStep, handleFormSubmit, setRole }} />
        );
      case 2:
        return role === "enterprise" ? (
          <EnterpriseStepOne
            formTools={{
              nextStep,
              handleFormSubmit,
              handleChangeFormEnterprise,
              enterpriseInfos,
              formIsFilled,
              setFormIsFilled,
            }}
          />
        ) : (
          <CandidateStepOne
            formTools={{
              nextStep,
              handleFormSubmit,
              handleChangeFormCandidate,
              candidateInfos,
              formIsFilled,
              setFormIsFilled,
            }}
          />
        );
      case 3:
        return role === "enterprise" ? (
          <EnterpriseStepTwo
            formTools={{
              nextStep,
              handleFormSubmit,
              handleChangeFormEnterprise,
              sendEnterpriseInfos,
              setEnterpriseInfos,
              enterpriseInfos,
              formIsFilled,
              setFormIsFilled,
            }}
          />
        ) : (
          <CandidateStepTwo
            formTools={{
              nextStep,
              handleFormSubmit,
              sendCandidateInfos,
              handleChangeFormCandidate,
              setCandidateInfos,
              candidateInfos,
              formIsFilled,
              setFormIsFilled,
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

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
    departmentId: "",
    appetencesId: "",
    contractTypesId: "",
    workRhythmsId: "",
    levelId: "",
    languages: [],
  });

  const [enterpriseInfos, setEnterpriseInfos] = useState({
    name: "",
    siret: "",
    description: "",
    email: "",
    password: "",
    departmentId: "",
    legalStatusId: "",
    businessSectorsId: "",
    salary: "",
    contractTypesId: "",
    workRhythmsId: "",
    appetencesId: "",
    languages: [],
  });

  console.info("ENTREPRISE INFOS: ", enterpriseInfos);

  const handleChangeForm = (event) => {
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
    // Vérifier si le level est sélectionné
    const isLevelSelected =
      candidateInfos.levelId !== null && candidateInfos.levelId !== undefined;

    // Vérifier si au moins une appetence est sélectionnée
    const isAppetenceSelected = candidateInfos.appetencesId !== null;

    // Vérifier si au moins une checkbox est cochée pour les langages informatiques
    const isLanguageSelected = candidateInfos.programmingLanguagesId !== null;

    // Si toutes les conditions sont remplies, envoyer les informations du candidat
    if (isLevelSelected && isAppetenceSelected && isLanguageSelected) {
      registerCandidate(candidateInfos);
      nextStep();
    }
  };

  const sendEnterpriseInfos = () => {
    // Vérifier si au moins une appetence est sélectionnée
    const isAppetenceSelected = enterpriseInfos.appetencesId !== null;

    // Vérifier si au moins une checkbox est cochée pour les langages informatiques
    const isLanguageSelected = enterpriseInfos.programmingLanguagesId !== null;

    // Si toutes les conditions sont remplies, envoyer les informations du candidat
    if (isAppetenceSelected && isLanguageSelected) {
      registerEnterprise(enterpriseInfos);
      nextStep();
    }
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
              handleChangeForm,
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
              handleChangeForm,
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

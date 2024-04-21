/* eslint-disable no-else-return */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import readAllAppetences from "../../services/appetencesService";
import readAllContractTypes from "../../services/contractTypesService";
import readAllProgrammingLanguages from "../../services/programmingLanguagesService";
import readAllWorkRhythms from "../../services/workRhythmsService";
import readAllLevels from "../../services/levelsService";

import "../../styles/register/candidateStepTwo.css";

function CandidateStepTwo({
  formTools: {
    handleFormSubmit,
    sendCandidateInfos,
    handleChangeFormCandidate,
    setCandidateInfos,
    candidateInfos,
    formIsFilled,
    setFormIsFilled,
  },
}) {
  console.info("CONSOLE INFO DE LA STEP TWO :", candidateInfos);

  const [appetences, setAppetences] = useState([]);
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [contractTypes, setContractTypes] = useState([]);
  const [workRhythms, setWorkRhythms] = useState([]);
  const [levels, setLevels] = useState([]);

  const [appetenceButton, setAppetenceButton] = useState("Frontend");
  const [levelButton, setLevelButton] = useState("Junior");

  useEffect(() => {
    readAllProgrammingLanguages().then((registerProgrammingLanguages) =>
      setProgrammingLanguages(registerProgrammingLanguages)
    );

    readAllLevels().then((registerLevels) => setLevels(registerLevels));

    readAllContractTypes().then((registerContractTypes) =>
      setContractTypes(registerContractTypes)
    );

    readAllWorkRhythms().then((registerWorkRhythms) =>
      setWorkRhythms(registerWorkRhythms)
    );

    readAllAppetences().then((registerAppetences) =>
      setAppetences(registerAppetences)
    );
    if (
      candidateInfos.appetencesId !== "" &&
      candidateInfos.languages.length > 0 &&
      candidateInfos.levelId !== "" &&
      candidateInfos.contractTypesId &&
      candidateInfos.workRhythmsId
    ) {
      setFormIsFilled(true);
    } else {
      setFormIsFilled(false);
    }
  }, [candidateInfos, setFormIsFilled]);

  console.info("LE FORMULAIRE EST REMPLI ?", formIsFilled);

  const handleFocusAppetenceButton = (event) => {
    setAppetenceButton(event.target.name);
    setCandidateInfos((prevInfos) => ({
      ...prevInfos,
      appetencesId: event.target.value,
    }));
  };

  const handleFocusLevelButton = (event) => {
    setLevelButton(event.target.name);
    setCandidateInfos((prevInfos) => ({
      ...prevInfos,
      levelId: event.target.value,
    }));
  };

  const fillLanguagesArray = (event) => {
    const { value, checked } = event.target;
    setCandidateInfos((prevInfos) => {
      if (checked) {
        const updatedLanguages = [...prevInfos.languages, value];
        return { ...prevInfos, languages: updatedLanguages };
      }
      const filteredLanguages = prevInfos.languages.filter(
        (language) => language !== value
      );

      return { ...prevInfos, languages: filteredLanguages };
    });
  };

  return (
    <form className="candidate_step_two_form" onSubmit={handleFormSubmit}>
      <h1>Créer Un Compte</h1>
      <section className="subtitle">
        <div className="square"> </div>
        <p>
          ÉTAPE 2 <span>- </span>Répondez à ces quelques questions
        </p>
      </section>

      <section className="levels_experience_part_container">
        <p>
          Appétences <span>:</span>
        </p>
        <section className="levels_and_experience_button_container">
          {appetences.map((appetence) => (
            <button
              type="button"
              key={appetence.id}
              name={appetence.appetence}
              value={appetence.id}
              className={
                appetenceButton === appetence.appetence ? "focusedButton" : ""
              }
              onClick={(event) => handleFocusAppetenceButton(event)}
            >
              {appetence.appetence}
            </button>
          ))}
        </section>
      </section>

      <section className="research_and_workplace_container">
        <div>
          <p>
            Je recherche <span>:</span>
          </p>
          {contractTypes.map((contractType) => (
            <div
              className="enterprise_expectation_container"
              key={contractType.id}
            >
              <input
                type="radio"
                name="contractTypesId"
                id={contractType.id}
                value={contractType.id}
                required
                onChange={handleChangeFormCandidate}
              />
              <label htmlFor={contractType.id}>
                {contractType.contract_type}
              </label>
            </div>
          ))}
        </div>

        <div>
          <p>
            Lieu de travail <span>:</span>
          </p>
          {workRhythms.map((workRhythm) => (
            <div className="enterprise_workplace_container" key={workRhythm.id}>
              <input
                type="radio"
                name="workRhythmsId"
                id={workRhythm.id}
                value={workRhythm.id}
                required
                onChange={handleChangeFormCandidate}
              />
              <label htmlFor={workRhythm.id}>{workRhythm.work_rhythm}</label>
            </div>
          ))}
        </div>
      </section>
      <section className="levels_experience_part_container">
        <p>
          Je suis <span>:</span>
        </p>
        <section className="levels_and_experience_button_container">
          {levels.map((level) => (
            <button
              type="button"
              key={level.id}
              name={level.level}
              value={level.id}
              className={levelButton === level.level ? "focusedButton" : ""}
              onClick={(event) => handleFocusLevelButton(event)}
            >
              {level.level}
            </button>
          ))}
        </section>
      </section>

      <section className="computer_language_checkbox_container">
        <p>
          Mes langages informatiques
          <span className="select_languages_span">
            <span>{" { "}</span>
            sélectionnez au moins un langage
            <span>{" } "}</span>
          </span>
          <span> : </span>
        </p>
        <section className="programming_languages">
          {programmingLanguages.map((programmingLanguage) => (
            <div key={programmingLanguage.id}>
              <input
                type="checkbox"
                name="programmingLanguagesId"
                id="checkbox"
                value={programmingLanguage.id}
                onChange={fillLanguagesArray}
              />
              <label htmlFor="checkbox">
                {programmingLanguage.programming_language}
              </label>
            </div>
          ))}
        </section>
      </section>
      <p>{formIsFilled ? "" : "Remplissez tous les champs"}</p>

      <button
        type="submit"
        className={formIsFilled ? "" : "invisible"}
        onClick={formIsFilled ? () => sendCandidateInfos() : null}
      >
        Finaliser l'inscription
      </button>
    </form>
  );
}

CandidateStepTwo.propTypes = {
  formTools: PropTypes.shape({
    handleFormSubmit: PropTypes.func.isRequired,
    sendCandidateInfos: PropTypes.func.isRequired,
    handleChangeFormCandidate: PropTypes.func.isRequired,
    setCandidateInfos: PropTypes.func.isRequired,
    candidateInfos: PropTypes.shape({
      appetencesId: PropTypes.arrayOf(PropTypes.string).isRequired,
      levelId: PropTypes.number.isRequired,
      contractTypesId: PropTypes.number.isRequired,
      workRhythmsId: PropTypes.number.isRequired,
      languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    formIsFilled: PropTypes.bool.isRequired,
    setFormIsFilled: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CandidateStepTwo;

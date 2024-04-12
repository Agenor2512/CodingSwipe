/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import readAllAppetences from "../../services/appetencesService";
import readAllContractTypes from "../../services/contractTypes";
import readAllProgrammingLanguages from "../../services/programmingLanguagesService";
import readAllWorkRhythms from "../../services/workRhythmsService";
import readAllLevels from "../../services/levelsService";

import "../../styles/register/candidateStepTwo.css";

function CandidateStepTwo({
  formTools: {
    handleFormSubmit,
    registerCandidate,
    handleChangeForm,
    setCandidateInfos,
    candidateInfos,
    isError,
  },
}) {
  console.info("CONSOLE INFO DE LA STEP TWO :", candidateInfos);

  const [appetences, setAppetences] = useState([]);
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [contractTypes, setContractTypes] = useState([]);
  const [workRhythms, setWorkRhythms] = useState([]);
  const [levels, setLevels] = useState([]);
  const [formIsFill, setFormIsFill] = useState(false);

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
      candidateInfos.appetences &&
      candidateInfos.level &&
      candidateInfos.contractType &&
      candidateInfos.workRhythm &&
      candidateInfos.programmingLanguages
    ) {
      setFormIsFill(true);
    } else {
      setFormIsFill(false);
    }
  }, [candidateInfos]);

  console.info("LE FORMULAIRE EST REMPLI ?", formIsFill);

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
    <form
      action="submit"
      className="candidate_step_two_form"
      onSubmit={handleFormSubmit}
    >
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
              name="appetencesId"
              value={appetence.id}
              onClick={handleChangeForm}
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
                onChange={handleChangeForm}
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
                onChange={handleChangeForm}
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
              name="levelId"
              value={level.id}
              onClick={handleChangeForm}
            >
              {level.level}
            </button>
          ))}
        </section>
      </section>

      <p>
        Mes langages informatiques
        <span className="select_languages_span">
          <span>{" { "}</span>
          sélectionnez au moins un langage <span>{" } "}</span>
        </span>
        <span> : </span>
      </p>
      <section className="computer_language_checkbox_container">
        {programmingLanguages.map((programmingLanguage) => (
          <div key={programmingLanguage.id}>
            <input
              type="checkbox"
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
      <p>{isError ? "Remplissez tous les champs" : ""}</p>
      <section className="final_button_to_inscription_container">
        <input
          type="submit"
          value="Finaliser l'inscription"
          className="final_button_to_inscription"
          onClick={registerCandidate}
        />
      </section>
    </form>
  );
}

export default CandidateStepTwo;

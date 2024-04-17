import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import readAllLegalStatus from "../../services/legalStatus";
import readAllBusinessSectors from "../../services/businessSectors";
import readAllAppetences from "../../services/appetencesService";
import readAllContractTypes from "../../services/contractTypes";
import readAllProgrammingLanguages from "../../services/programmingLanguagesService";
import readAllWorkRhythms from "../../services/workRhythmsService";

import "../../styles/register/enterpriseStepTwo.css";

function EnterpriseStepTwo({
  formTools: {
    handleFormSubmit,
    registerEnterprise,
    handleChangeFormEnterprise,
    setEnterpriseInfos,
    enterpriseInfos,
    isError,
  },
}) {
  console.info("CONSOLE INFO DE LA STEP TWO :", enterpriseInfos);

  const [legalStatus, setLegalStatus] = useState([]);
  const [businessSectors, setBusinessSectors] = useState([]);
  const [appetences, setAppetences] = useState([]);
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [contractTypes, setContractTypes] = useState([]);
  const [workRhythms, setWorkRhythms] = useState([]);
  const [formIsFill, setFormIsFill] = useState(false);

  useEffect(() => {
    readAllLegalStatus().then((registerLegalStatus) =>
      setLegalStatus(registerLegalStatus)
    );

    readAllBusinessSectors().then((registerBusinessSectors) =>
      setBusinessSectors(registerBusinessSectors)
    );

    readAllProgrammingLanguages().then((registerProgrammingLanguages) =>
      setProgrammingLanguages(registerProgrammingLanguages)
    );

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
      enterpriseInfos.description &&
      enterpriseInfos.legalStatusId &&
      enterpriseInfos.businessSectorsId &&
      enterpriseInfos.salary &&
      enterpriseInfos.contractTypesId &&
      enterpriseInfos.workRhythmsId &&
      enterpriseInfos.appetencesId &&
      enterpriseInfos.programmingLanguages
    ) {
      setFormIsFill(true);
    } else {
      setFormIsFill(false);
    }
  }, [enterpriseInfos]);

  console.info("LE FORMULAIRE EST REMPLI ?", formIsFill);

  const fillLanguagesArray = (event) => {
    const { value, checked } = event.target;
    setEnterpriseInfos((prevInfos) => {
      const updatedLanguages = checked
        ? [...(prevInfos.languages || []), value] // If prevInfos.languages is not defined, initialize it as an empty array
        : prevInfos.languages.filter((language) => language !== value);
      return { ...prevInfos, languages: updatedLanguages };
    });
  };

  return (
    <div className="enterprise_form_container">
      <form className="step_two_enterprise_form" onSubmit={handleFormSubmit}>
        <h1>Créer Un Compte</h1>
        <section className="subtitle">
          <div className="squareSubtitle"> </div>
          <p>
            ETAPE 2 <span>- </span>
            Répondez à ces quelques questions
          </p>
        </section>

        <label htmlFor="enterprise-type-select">
          Type d'entreprise <span>:</span>
        </label>
        <select
          name="legalStatusId"
          id="enterprise-type-select"
          onChange={handleChangeFormEnterprise}
        >
          <option value="choose-enterprise-type">
            Veuillez choisir la forme juridique de votre entreprise
          </option>
          {legalStatus.map((legalStatu) => (
            <option key={legalStatu.id} value={legalStatu.id}>
              {legalStatu.legal_status}
            </option>
          ))}
        </select>

        <label htmlFor="industries-select">
          Secteur d'activité <span>:</span>
        </label>
        <select
          name="businessSectorsId"
          id="industries-select"
          onChange={handleChangeFormEnterprise}
        >
          <option value="choose-industries">
            Veuillez choisir votre secteur d'activité
          </option>
          {businessSectors.map((businessSector) => (
            <option key={businessSector.id} value={businessSector.id}>
              {businessSector.business_sector}
            </option>
          ))}
        </select>

        <label htmlFor="description-area">
          Description de votre entreprise <span>:</span>
        </label>
        <textarea
          required
          name="description"
          type="text"
          id="description-area"
          onChange={handleChangeFormEnterprise}
          rows="10"
          placeholder="Sans la nommer, merci d’ajouter une description de votre entreprise (exemple : nombre de salariés, précisions concernant le secteur d’activité, date de création ...)"
        />

        <section className="levels_experience_part_container">
          <p>
            Je recherche un.e développeur·euse <span>:</span>
          </p>
          <section className="levels_and_experience_button_container">
            {appetences.map((appetence) => (
              <button
                type="button"
                key={appetence.id}
                name="appetencesId"
                value={appetence.id}
                onClick={handleChangeFormEnterprise}
              >
                {appetence.appetence}
              </button>
            ))}
          </section>
        </section>

        <section className="research_and_workplace_container">
          <div>
            <p>
              Je propose <span>:</span>
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
                  onChange={handleChangeFormEnterprise}
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
              <div
                className="enterprise_workplace_container"
                key={workRhythm.id}
              >
                <input
                  type="radio"
                  name="workRhythmsId"
                  id={workRhythm.id}
                  value={workRhythm.id}
                  onChange={handleChangeFormEnterprise}
                />
                <label htmlFor={workRhythm.id}>{workRhythm.work_rhythm}</label>
              </div>
            ))}
          </div>

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
                  id={programmingLanguage.id}
                  value={programmingLanguage.id}
                  onChange={fillLanguagesArray}
                />
                <label htmlFor={programmingLanguage.id}>
                  {programmingLanguage.programming_language}
                </label>
              </div>
            ))}
          </section>
        </section>

        <div className="salary_languages_missions_desktop">
          <section className="annual_salary">
            <p>
              Salaire annuel <span>:</span>
            </p>
            <div>
              <label htmlFor="salary">
                Salaire <span>:</span>
              </label>
              <input
                type="number"
                name="salary"
                onChange={handleChangeFormEnterprise}
              />
            </div>
          </section>

          <p>{isError ? "Remplissez tous les champs" : ""}</p>
          <button
            type="submit"
            className="final_button_to_inscription_container"
            onClick={registerEnterprise}
          >
            Finaliser l'inscription
          </button>
        </div>
      </form>
    </div>
  );
}

EnterpriseStepTwo.propTypes = {
  formTools: PropTypes.shape({
    handleFormSubmit: PropTypes.func.isRequired,
    registerEnterprise: PropTypes.func.isRequired,
    handleChangeFormEnterprise: PropTypes.func.isRequired,
    setEnterpriseInfos: PropTypes.func.isRequired,
    enterpriseInfos: PropTypes.shape({
      description: PropTypes.string.isRequired,
      legalStatusId: PropTypes.string.isRequired,
      businessSectorsId: PropTypes.string.isRequired,
      salary: PropTypes.number.isRequired,
      contractTypesId: PropTypes.string.isRequired,
      workRhythmsId: PropTypes.string.isRequired,
      appetencesId: PropTypes.string.isRequired,
      programmingLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    isError: PropTypes.bool.isRequired,
  }).isRequired,
};

export default EnterpriseStepTwo;

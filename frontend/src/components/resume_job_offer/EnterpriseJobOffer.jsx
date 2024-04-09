/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState, useContext } from "react";

import { readAllAppetences } from "../../services/appetencesService";
import { readAllContractTypes } from "../../services/contractTypes";
import { readAllProgrammingLanguages } from "../../services/programmingLanguagesService";
import { readAllWorkRhythms } from "../../services/workRhythmsService";
import { readOfferById } from "../../services/jobOfferService";

import LoginContext from "../../context/LoginUserContext";

import DropDownList from "./DropDownList";
import SalaryAdministrator from "./SalaryAdministrator";
import ModifyButton from "./ModifyButton";

import "../../styles/resume_job_offer/enterpriseJobOffer.css";

function EnterpriseJobOffer() {
  const { loginUser } = useContext(LoginContext);

  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [contractTypes, setContractTypes] = useState([]);
  const [workRhythms, setWorkRhythms] = useState([]);
  const [appetences, setAppetences] = useState([]);
  const [jobOffer, setJobOffer] = useState({});

  useEffect(() => {
    readAllProgrammingLanguages().then((resumeProgrammingLanguages) =>
      setProgrammingLanguages(resumeProgrammingLanguages)
    );

    readAllContractTypes().then((resumeContractTypes) =>
      setContractTypes(resumeContractTypes)
    );

    readAllWorkRhythms().then((resumeWorkRhythms) =>
      setWorkRhythms(resumeWorkRhythms)
    );

    readAllAppetences().then((resumeAppetences) =>
      setAppetences(resumeAppetences)
    );

    readOfferById(loginUser.id).then((enterpriseOffer) =>
      setJobOffer(enterpriseOffer)
    );
  }, []);

  return (
    <div className="users_infos_container">
      <div className="users_infos_header">
        <div>W</div>
        <section>
          <h1>Développeur/Développeuse</h1>
          <DropDownList
            appetences={appetences}
            userAppetence={jobOffer.infos && jobOffer.infos.appetence}
          />
        </section>
      </div>

      <div className="modify_display_desktop">
        <div>
          <h2>Qui sommes-nous ?</h2>
          <ModifyButton />
        </div>

        <section className="work_proposal_container">
          <h2>Profil recherché</h2>

          <div>
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
                    id="radio"
                    checked={
                      jobOffer.infos &&
                      jobOffer.infos.contract_types_id === contractType.id
                    }
                  />
                  <label htmlFor="radio">{contractType.contract_type}</label>
                </div>
              ))}
            </div>

            <div>
              <p>
                Lieu de travail <span>:</span>
              </p>
              {workRhythms.map((workRhythm) => (
                <div
                  className="enterprise_expectation_container"
                  key={workRhythm.id}
                >
                  <input
                    type="radio"
                    id="radio"
                    checked={
                      jobOffer.infos &&
                      jobOffer.infos.work_rhythms_id === workRhythm.id
                    }
                  />
                  <label htmlFor="radio">{workRhythm.work_rhythm}</label>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="salary_languages_missions_desktop">
        <section className="annual_salary">
          <h2>Salaire annuel brut</h2>
          <div>
            <label htmlFor="salary">
              Salaire <span>:</span>
            </label>
            <SalaryAdministrator />
          </div>
        </section>

        <section className="computer_language_checkbox_container">
          <h2>Langages informatiques</h2>
          <div>
            {programmingLanguages.map((programmingLanguage) => (
              <div key={programmingLanguage.id}>
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={
                    jobOffer.langues &&
                    jobOffer.langues.includes(programmingLanguage.id)
                  }
                />
                <label htmlFor="checkbox">
                  {programmingLanguage.programming_language}
                </label>
              </div>
            ))}
          </div>
        </section>

        <section className="missions">
          <h2>Missions principales</h2>
          <div>
            <button type="button">Ajouter</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EnterpriseJobOffer;

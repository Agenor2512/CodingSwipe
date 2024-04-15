import React, { useEffect, useState, useContext } from "react";

import readAllAppetences from "../../services/appetencesService";
import readAllContractTypes from "../../services/contractTypes";
import readAllProgrammingLanguages from "../../services/programmingLanguagesService";
import readAllWorkRhythms from "../../services/workRhythmsService";
import readAllSoftSkills from "../../services/softSkillsService";
import { readResumeById } from "../../services/resumesService";

import LoginContext from "../../context/LoginUserContext";

import DropDownList from "./DropDownList";
// import AddExperienceButton from "./AddExperienceButton";
// import ModifyButton from "./ModifyButton";

import "../../styles/resume_job_offer/resume.css";

function Resume() {
  const { loginUser } = useContext(LoginContext);

  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [contractTypes, setContractTypes] = useState([]);
  const [workRhythms, setWorkRhythms] = useState([]);
  const [appetences, setAppetences] = useState([]);
  const [resume, setResume] = useState({});

  useEffect(() => {
    readAllProgrammingLanguages().then((resumeProgrammingLanguages) =>
      setProgrammingLanguages(resumeProgrammingLanguages)
    );

    readAllSoftSkills().then((resumeSoftSkills) =>
      setSoftSkills(resumeSoftSkills)
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

    readResumeById(loginUser.id).then((candidateResume) =>
      setResume(candidateResume)
    );
  }, []);

  console.info("Resume : ", resume);

  return (
    <div className="users_infos_container">
      <div className="users_infos_header">
        <div>W</div>
        <section>
          <h1>Développeur/Développeuse</h1>
          <DropDownList
            appetences={appetences}
            userAppetence={resume.infos && resume.infos.appetence}
          />
        </section>
      </div>

      <div className="modify_display_desktop">
        <div>
          <h2>Qui suis-je ?</h2>
          {/* <ModifyButton /> */}
        </div>

        <section className="research_and_workplace_container">
          <h2>Ma recherche</h2>

          <div>
            <div>
              <p>
                Je recherche <span>:</span>
              </p>
              {contractTypes.map((contractType) => (
                <div
                  className="candidate_expectation_container"
                  key={contractType.id}
                >
                  <input
                    type="radio"
                    id="radio"
                    defaultChecked={
                      resume.infos &&
                      resume.infos.contract_types_id === contractType.id
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
                  className="candidate_expectation_container"
                  key={workRhythm.id}
                >
                  <input
                    type="radio"
                    id="radio"
                    defaultChecked={
                      resume.infos &&
                      resume.infos.work_rhythms_id === workRhythm.id
                    }
                  />
                  <label htmlFor="radio">{workRhythm.work_rhythm}</label>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="skills_languages_experiences_desktop">
        <section className="soft_skills">
          <h2>Soft skills</h2>
          <div>
            {softSkills.map((softSkill) => (
              <div className="soft_skills_container" key={softSkill.id}>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">{softSkill.soft_skill}</label>
              </div>
            ))}
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
                    resume.programmingLanguages &&
                    resume.programmingLanguages.includes(programmingLanguage.id)
                  }
                />
                <label htmlFor="checkbox">
                  {programmingLanguage.programming_language}
                </label>
              </div>
            ))}
          </div>
        </section>

        <section className="significatives_experiences">
          <h2>Expériences significatives</h2>
          <div>
            {/* <AddExperienceButton experiences={resume.experience} /> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;

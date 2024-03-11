/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";

import RegisterContext from "../../context/RegisterContext";

import "../../styles/register/candidateStepTwo.css";

function CandidateStepTwo({ formTools: { nextStep, handleFormSubmit } }) {
  const mainCourses = [
    {
      id: 0,
      buttonText: "Frontend",
    },
    {
      id: 1,
      buttonText: "Backend",
    },
    {
      id: 2,
      buttonText: "Full Stack",
    },
  ];

  const candidateExperienceLevel = [
    {
      id: 0,
      name: "junior",
      buttonText: "Junior",
    },
    {
      id: 1,
      name: "mid-Level",
      buttonText: "Mid-level",
    },
    {
      id: 2,
      name: "senior",
      buttonText: "Senior",
    },
  ];

  const enterpriseExpectations = [
    {
      id: 0,
      key: "full-time",
      text: "Un CDI",
    },
    {
      id: 1,
      key: "contract",
      text: "Un CDD",
    },
    {
      id: 2,
      key: "internship",
      text: "Un Stage / Une Alternance",
    },
    {
      id: 3,
      key: "freelance",
      text: "Du freelance",
    },
  ];

  const enterpriseWorkplaces = [
    {
      id: 0,
      key: "on-site",
      text: "Sur site",
    },
    {
      id: 1,
      key: "half-remote",
      text: "Remote partiel",
    },
    {
      id: 2,
      key: "full-remote",
      text: "Full remote",
    },
  ];

  const computerLanguages = [
    {
      id: 0,
      key: "html-css",
      text: "HTML/CSS",
    },
    {
      id: 1,
      key: "javascript",
      text: "JavaScript",
    },
    {
      id: 2,
      key: "python",
      text: "Python",
    },
    {
      id: 3,
      key: "java",
      text: "Java",
    },
    {
      id: 4,
      key: "ruby",
      text: "Ruby On Rails",
    },
    {
      id: 5,
      key: "vue",
      text: "Vue.js",
    },
    {
      id: 6,
      key: "swift",
      text: "Swift",
    },
    {
      id: 7,
      key: "kotlin",
      text: "Kotlin",
    },
    {
      id: 8,
      key: "flutter",
      text: "Flutter",
    },
    {
      id: 9,
      key: "go",
      text: "Go",
    },
    {
      id: 10,
      key: "c#",
      text: "C#",
    },
    {
      id: 11,
      key: "c++",
      text: "C++",
    },
    {
      id: 12,
      key: "react",
      text: "React",
    },
    {
      id: 13,
      key: "angular",
      text: "Angular",
    },
    {
      id: 14,
      key: "nodejs",
      text: "Node.js",
    },
    {
      id: 15,
      key: "php",
      text: "PHP",
    },
    {
      id: 16,
      key: "rust",
      text: "Rust",
    },
    {
      id: 17,
      key: ".net",
      text: ".NET Core / .NET 5",
    },
    {
      id: 18,
      key: "sql",
      text: "SQL",
    },
    {
      id: 19,
      key: "nosql",
      text: "NoSQL",
    },
  ];

  const { infos, setInfos } = useContext(RegisterContext);

  useEffect(() => {
    // Initialisation des valeurs par défaut des champs
    setInfos({
      ...infos,
      appetence: mainCourses[0].id,
      level: candidateExperienceLevel[0].id,
    });
  }, []);

  const selectedAppentenceId = infos.appetence;
  const selectedLevelId = infos.level;

  const handleFormChange = (key, { target: { value } }) => {
    setInfos({
      ...infos,
      [key]: value,
    });
  };

  const handleFormChangeForList = (key, { target: { value } }) => {
    const values = [...infos[key]];

    if (values.includes(value)) {
      values.splice(values.indexOf(value), 1);
    } else {
      values.push(value);
    }

    setInfos({
      ...infos,
      [key]: values,
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
          {mainCourses.map(({ id, buttonText }) => (
            <button
              type="button"
              key={id}
              value={id}
              onClick={(event) => handleFormChange("appetence", event)}
              className={
                id === parseInt(selectedAppentenceId, 10) ? "focusedButton" : ""
              }
            >
              {buttonText}
            </button>
          ))}
        </section>
      </section>

      <section className="research_and_workplace_container">
        <div>
          <p>
            Je recherche <span>:</span>
          </p>
          {enterpriseExpectations.map(({ id, key, text }) => (
            <div className="enterprise_expectation_container" key={key}>
              <input
                type="checkbox"
                id="checkbox"
                value={id}
                onChange={(event) =>
                  handleFormChangeForList("contractType", event)
                }
              />
              <label htmlFor="checkbox">{text}</label>
            </div>
          ))}
        </div>

        <div>
          <p>
            Lieu de travail <span>:</span>
          </p>
          {enterpriseWorkplaces.map(({ id, key, text }) => (
            <div className="enterprise_workplace_container" key={key}>
              <input
                type="checkbox"
                id="checkbox"
                value={id}
                onChange={(event) =>
                  handleFormChangeForList("workRhythm", event)
                }
              />
              <label htmlFor="checkbox">{text}</label>
            </div>
          ))}
        </div>
      </section>
      <section className="levels_experience_part_container">
        <p>
          Je suis <span>:</span>
        </p>
        <section className="levels_and_experience_button_container">
          {candidateExperienceLevel.map(({ id, name, buttonText }) => (
            <button
              type="button"
              key={id}
              name={name}
              value={id}
              onClick={(event) => handleFormChange("level", event)}
              className={
                id === parseInt(selectedLevelId, 10) ? "focusedButton" : ""
              }
            >
              {buttonText}
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
        {computerLanguages.map(({ id, key, text }) => (
          <div key={key}>
            <input
              type="checkbox"
              id="checkbox"
              value={id}
              onChange={(event) =>
                handleFormChangeForList("programmingLanguages", event)
              }
            />
            <label htmlFor="checkbox">{text}</label>
          </div>
        ))}
      </section>
      <section className="final_button_to_inscription_container">
        <input
          type="submit"
          value="Finaliser l'inscription"
          className="final_button_to_inscription"
          onClick={nextStep}
        />
      </section>
    </form>
  );
}

export default CandidateStepTwo;

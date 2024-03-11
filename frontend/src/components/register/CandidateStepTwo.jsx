/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";

import RegisterContext from "../../context/RegisterContext";
import { addUser } from "../../services/usersService";

import "../../styles/register/candidateStepTwo.css";

function CandidateStepTwo({ formTools: { nextStep, handleFormSubmit } }) {
  const appetences = [
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

  const level = [
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

  const contractType = [
    {
      id: 0,
      text: "Un CDI",
    },
    {
      id: 1,
      text: "Un CDD",
    },
    {
      id: 2,
      text: "Un Stage / Une Alternance",
    },
    {
      id: 3,
      text: "Du freelance",
    },
  ];

  const workRhythm = [
    {
      id: 0,
      text: "Sur site",
    },
    {
      id: 1,
      text: "Remote partiel",
    },
    {
      id: 2,
      text: "Full remote",
    },
  ];

  const programmingLanguages = [
    {
      id: 0,
      text: "HTML/CSS",
    },
    {
      id: 1,
      text: "JavaScript",
    },
    {
      id: 2,
      text: "Python",
    },
    {
      id: 3,
      text: "Java",
    },
    {
      id: 4,
      text: "Ruby On Rails",
    },
    {
      id: 5,
      text: "Vue.js",
    },
    {
      id: 6,
      text: "Swift",
    },
    {
      id: 7,
      text: "Kotlin",
    },
    {
      id: 8,
      text: "Flutter",
    },
    {
      id: 9,
      text: "Go",
    },
    {
      id: 10,
      text: "C#",
    },
    {
      id: 11,
      text: "C++",
    },
    {
      id: 12,
      text: "React",
    },
    {
      id: 13,
      text: "Angular",
    },
    {
      id: 14,
      text: "Node.js",
    },
    {
      id: 15,
      text: "PHP",
    },
    {
      id: 16,
      text: "Rust",
    },
    {
      id: 17,
      text: ".NET Core / .NET 5",
    },
    {
      id: 18,
      text: "SQL",
    },
    {
      id: 19,
      text: "NoSQL",
    },
  ];

  const { infos, setInfos } = useContext(RegisterContext);

  useEffect(() => {
    // Initialisation des valeurs par défaut des champs
    setInfos({
      ...infos,
      appetence: appetences[0].id,
      level: level[0].id,
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

  const registerThenRedirect = () => {
    const requestBody = {
      ...infos,
    };
    addUser({ ...requestBody });
    nextStep();
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
          {appetences.map(({ id, buttonText }) => (
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
          {contractType.map(({ id, text }) => (
            <div className="enterprise_expectation_container" key={id}>
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
          {workRhythm.map(({ id, text }) => (
            <div className="enterprise_workplace_container" key={id}>
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
          {level.map(({ id, name, buttonText }) => (
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
        {programmingLanguages.map(({ id, text }) => (
          <div key={id}>
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
          onClick={registerThenRedirect}
        />
      </section>
    </form>
  );
}

export default CandidateStepTwo;

/* eslint-disable react/prop-types */
import React, { useState } from "react";

import "../../styles/register/candidateStepTwo.css";

function CandidateStepTwo({ formTools: { nextStep, handleFormSubmit } }) {
  const [specialtyButton, setSpecialtyButton] = useState("frontend");

  const [experienceButton, setExperienceButton] = useState("junior");

  const handleClickSpecialtyButton = (event) => {
    setSpecialtyButton(event.target.name);
  };

  const handleClickExperienceButton = (event) => {
    setExperienceButton(event.target.name);
  };

  const mainCourses = [
    {
      name: "frontend",
      buttonText: "Frontend",
    },
    {
      name: "backend",
      buttonText: "Backend",
    },
    {
      name: "fullstack",
      buttonText: "Full Stack",
    },
  ];

  const candidateExperienceLevel = [
    {
      name: "junior",
      buttonText: "Junior",
    },
    {
      name: "mid-Level",
      buttonText: "Mid-level",
    },
    {
      name: "senior",
      buttonText: "Senior",
    },
  ];

  const enterpriseExpectations = [
    {
      key: "full-time",
      text: "Un CDI",
    },
    {
      key: "contract",
      text: "Un CDD",
    },
    {
      key: "internship",
      text: "Un Stage / Une Alternance",
    },
    {
      key: "freelance",
      text: "Du freelance",
    },
  ];

  const enterpriseWorkplaces = [
    {
      key: "on-site",
      text: "Sur site",
    },
    {
      key: "half-remote",
      text: "Remote partiel",
    },
    {
      key: "full-remote",
      text: "Full remote",
    },
  ];

  const computerLanguages = [
    {
      key: "html-css",
      text: "HTML/CSS",
    },
    {
      key: "javascript",
      text: "JavaScript",
    },
    {
      key: "python",
      text: "Python",
    },
    {
      key: "java",
      text: "Java",
    },
    {
      key: "ruby",
      text: "Ruby On Rails",
    },
    {
      key: "vue",
      text: "Vue.js",
    },
    {
      key: "swift",
      text: "Swift",
    },
    {
      key: "kotlin",
      text: "Kotlin",
    },
    {
      key: "flutter",
      text: "Flutter",
    },
    {
      key: "go",
      text: "Go",
    },
    {
      key: "c#",
      text: "C#",
    },
    {
      key: "c++",
      text: "C++",
    },
    {
      key: "react",
      text: "React",
    },
    {
      key: "angular",
      text: "Angular",
    },
    {
      key: "nodejs",
      text: "Node.js",
    },
    {
      key: "php",
      text: "PHP",
    },
    {
      key: "rust",
      text: "Rust",
    },
    {
      key: ".net",
      text: ".NET Core / .NET 5",
    },
    {
      key: "sql",
      text: "SQL",
    },
    {
      key: "nosql",
      text: "NoSQL",
    },
  ];

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
          {mainCourses.map(({ name, buttonText }) => (
            <button
              type="button"
              key={name}
              name={name}
              onClick={handleClickSpecialtyButton}
              className={specialtyButton === name ? "focusedButton" : ""}
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
          {enterpriseExpectations.map(({ key, text }) => (
            <div className="enterprise_expectation_container" key={key}>
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">{text}</label>
            </div>
          ))}
        </div>

        <div>
          <p>
            Lieu de travail <span>:</span>
          </p>
          {enterpriseWorkplaces.map(({ key, text }) => (
            <div className="enterprise_workplace_container" key={key}>
              <input type="checkbox" id="checkbox" />
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
          {candidateExperienceLevel.map(({ name, buttonText }) => (
            <button
              type="button"
              key={name}
              name={name}
              onClick={handleClickExperienceButton}
              className={experienceButton === name ? "focusedButton" : ""}
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
        {computerLanguages.map(({ key, text }) => (
          <div key={key}>
            <input type="checkbox" id="checkbox" />
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

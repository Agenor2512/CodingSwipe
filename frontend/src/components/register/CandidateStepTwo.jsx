import React, { useState } from "react";

import "../../styles/stepTwo.css";

/* TODO : 
    - Trouver une solution pour les accolades dans "Mes langages informatiques" 
*/

function StepTwo() {
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
    <form action="submit" className="candidate_step_two_form">
      <h1>Créer Un Compte</h1>
      <section className="subtitle">
        <div className="squareSubtitle"> </div>
        <p>
          ÉTAPE 2<span>-</span>Répondez à ces quelques questions
        </p>
      </section>

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

      <p>
        Je recherche <span>:</span>
      </p>
      {enterpriseExpectations.map(({ key, text }) => (
        <div className="enterprise_expectation_container" key={key}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">{text}</label>
        </div>
      ))}

      <p>
        Lieu de travail <span>:</span>
      </p>
      {enterpriseWorkplaces.map(({ key, text }) => (
        <div className="enterprise_workplace_container" key={key}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">{text}</label>
        </div>
      ))}

      <p>
        Je suis <span>:</span>
      </p>
      <section className="levels_and_experience_button_container">
        {candidateExperienceLevel.map(({ name, buttonText }) => (
          <button
            type="button"
            key={buttonText}
            name={name}
            onClick={handleClickExperienceButton}
            className={experienceButton === name ? "focusedButton" : ""}
          >
            {buttonText}
          </button>
        ))}
      </section>
      <p>
        Mes langages informatiques
        <span>sélectionnez au moins un langage</span>
        <span> : </span>
      </p>
      {computerLanguages.map(({ key, text }) => (
        <div className="computer_language_container" key={key}>
          <input type="checkbox" id="checkbox" key={key} />
          <label htmlFor="checkbox">{text}</label>
        </div>
      ))}

      <input type="submit" value="Finaliser l'inscription" />
    </form>
  );
}

export default StepTwo;

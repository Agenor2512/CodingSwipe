import React from "react";

import "../../styles/stepTwo.css";

/* TODO : 
    - Trouver une solution pour les accolades dans "Mes langages informatiques" 
*/

function StepTwo() {
  const mainCourses = [
    { value: "Frontend" },
    { value: "Backend" },
    { value: "Full Stack" },
  ];

  const candidateLevels = [
    { value: "Junior" },
    { value: "Mid-level" },
    { value: "Senior" },
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
    <form action="submit" className="step_two_form">
      <h1>Créer Un Compte</h1>
      <p>
        <span>"square" </span>ÉTAPE 2<span>-</span>Répondez à ces quelques
        questions
      </p>
      <p>
        Appétences <span>:</span>
      </p>
      {mainCourses.map(({ value }) => (
        <button type="button" className="main_course_button" key={value}>
          {value}
        </button>
      ))}

      <p>
        Je recherche <span>:</span>
      </p>
      {enterpriseExpectations.map(({ key, text }) => (
        <div className="enterprise_expectation_container" key={key}>
          <input type="checkbox" id="checkbox" value={key} />
          <label htmlFor="checkbox">{text}</label>
        </div>
      ))}

      <p>
        Lieu de travail <span>:</span>
      </p>
      {enterpriseWorkplaces.map(({ key, text }) => (
        <div className="enterprise_workplace_container" key={key}>
          <input type="checkbox" id="checkbox" value={key} />
          <label htmlFor="checkbox">{text}</label>
        </div>
      ))}

      <p>
        Je suis <span>:</span>
      </p>
      {candidateLevels.map(({ value }) => (
        <button type="button" className="candidate_level_button" key={value}>
          {value}
        </button>
      ))}
      <p>
        Mes langages informatiques
        <span>sélectionnez au moins un langage</span>
      </p>
      {computerLanguages.map(({ key, text }) => (
        <div className="computer_language_container" key={key}>
          <input type="checkbox" id="checkbox" value={key} key={key} />
          <label htmlFor="checkbox">{text}</label>
        </div>
      ))}

      <input type="submit" value="Finaliser l'inscription" />
    </form>
  );
}

export default StepTwo;

import React from "react";

import "../../styles/stepTwo.css";

/* TODO : 
    - Trouver une solution pour les accolades dans "Mes langages informatiques" 
*/

function StepTwo() {
  const mainCourses = ["Frontend", "Backend", "Full Stack"];

  const candidateLevels = ["Junior", "Mid-level", "Senior"];

  const enterpriseExpectations = [
    "Un CDI",
    "Un CDD",
    "Un Stage / Une Alternance",
    "Du freelance",
  ];

  const enterpriseWorkplaces = ["Sur site", "Remote partiel", "Full remote"];

  const computerLanguages = [
    "HTML/CSS",
    "JavaScript",
    "Python",
    "Java",
    "Ruby On Rails",
    "Vue.js",
    "Swift",
    "Kotlin",
    "Flutter",
    "Go",
    "C#",
    "C++",
    "React",
    ".NET Core / .NET 5",
    "SQL",
    "NoSQL",
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
      {mainCourses.map((mainCourse) => (
        <button type="button">{mainCourse}</button>
      ))}

      <p>
        Je recherche <span>:</span>
      </p>
      {enterpriseExpectations.map((enterpriseExpectation) => (
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">{enterpriseExpectation}</label>
        </div>
      ))}

      <p>
        Lieu de travail <span>:</span>
      </p>
      {enterpriseWorkplaces.map((enterpriseWorkplace) => (
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">{enterpriseWorkplace}</label>
        </div>
      ))}

      <p>
        Je suis <span>:</span>
      </p>
      {candidateLevels.map((candidateLevel) => (
        <button type="button">{candidateLevel}</button>
      ))}
      <p>
        Mes langages informatiques
        <span>sélectionnez au moins un langage</span>
      </p>
      {computerLanguages.map((computerLanguage) => (
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">{computerLanguage}</label>
        </div>
      ))}

      <input type="submit" value="Finaliser l'inscription" />
    </form>
  );
}

export default StepTwo;

/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";

import DropDownList from "./DropDownList";

import "../../styles/resume_job_offer/enterpriseJobOffer.css";

function EnterpriseJobOffer() {
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
    <div className="users_infos_container">
      <div className="users_infos_header">
        <div>W</div>
        <section>
          <h1>Développeur/Développeuse</h1>
          <DropDownList />
        </section>
      </div>

      <div className="modify_display_desktop">
        <div>
          <h2>Qui sommes-nous ?</h2>
          <textarea
            type="text"
            placeholder="Dites-en un peu plus aux candidats sur l'entreprise"
          />
          <button type="button">Modifier</button>
        </div>

        <section className="work_proposal_container">
          <h2>Profil recherché</h2>

          <div>
            <div>
              <p>
                Je propose <span>:</span>
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
                <div className="enterprise_expectation_container" key={key}>
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">{text}</label>
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
            <input type="text" id="salary" name="salary" />
            <button type="button" />
          </div>
        </section>

        <section className="computer_language_checkbox_container">
          <h2>Langages informatiques</h2>
          <div>
            {computerLanguages.map(({ key, text }) => (
              <div key={key}>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">{text}</label>
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

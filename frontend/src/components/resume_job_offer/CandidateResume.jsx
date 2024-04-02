/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

import LoginUserContext from "../../context/LoginUserContext";

import DropDownList from "./DropDownList";
import ModifyButton from "./ModifyButton";

import "../../styles/resume_job_offer/candidateResume.css";
import UserAddButton from "./UserAddButton";

function CandidateResume({ tools }) {
  const { loginUser } = useContext(LoginUserContext);
  const [candidate, setCandidate] = useState([]);

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

  const softSkills = [
    {
      key: "communication",
      text: "Communication",
    },
    {
      key: "problem-resolution",
      text: "Résolution de problème",
    },
    {
      key: "critical-thinking",
      text: "Pensée critique",
    },
    {
      key: "teamwork",
      text: "Travail d'équipe",
    },
    {
      key: "adaptability",
      text: "Adaptabilité",
    },
    {
      key: "time-management",
      text: "Gestion du temps",
    },
    {
      key: "creativity",
      text: "Créativité",
    },
    {
      key: "emphathy",
      text: "Empathie",
    },
    {
      key: "stress-management",
      text: "Gestion du stress",
    },
    {
      key: "curiosity",
      text: "Curiosité",
    },
    {
      key: "autonomy",
      text: "Autonomie",
    },
    {
      key: "leadership",
      text: "Leadership",
    },
    {
      key: "listening-skill",
      text: "Capacité d'écoute",
    },
    {
      key: "perseverance",
      text: "Persévérance",
    },
  ];

  const readInfosAboutCandidate = () => {
    axios
      .get(`http://localhost:3310/api/resume/${loginUser.id}`)
      .then((response) => setCandidate(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    readInfosAboutCandidate();
  }, []);

  console.info("CANDIDATE", candidate);

  return (
    <div className="users_infos_container">
      <button type="button" onClick={() => tools.setPageToDisplay("home")}>
        Voir les annonces
      </button>
      <div className="users_infos_header">
        <div>W</div>
        <section>
          <h1>Développeur/Développeuse</h1>
          <DropDownList />
        </section>
      </div>

      <div className="modify_display_desktop">
        <div>
          <h2>Qui suis-je ?</h2>

          {candidate.length ? <ModifyButton candidate={candidate[0]} /> : ""}
        </div>

        <section className="research_and_workplace_container">
          <h2>Ma recherche</h2>

          <div>
            <div>
              <p>
                Je recherche <span>:</span>
              </p>
              {enterpriseExpectations.map(({ key, text }) => (
                <div className="candidate_expectation_container" key={key}>
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
                <div className="candidate_expectation_container" key={key}>
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">{text}</label>
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
            {softSkills.map(({ key, text }) => (
              <div className="soft_skills_container" key={key}>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">{text}</label>
              </div>
            ))}
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

        <section className="significatives_experiences">
          <h2>Expériences significatives</h2>
          <div>
            {candidate.length ? (
              <UserAddButton
                candidate={candidate[0]}
                readInfosAboutCandidate={readInfosAboutCandidate}
              />
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CandidateResume;

/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";

import { readAllResume } from "../../services/resumesService";

import LoginUserContext from "../../context/LoginUserContext";

import SwipeSystem from "./SwipeSystem";
import WorkingConditionsCard from "./WorkingConditionsCard";

import "../../styles/content_to_swipe/candidateCandidacy.css";

function CandidateCandidacy() {
  const { loginUser } = useContext(LoginUserContext);

  const [isLoading, setIsLoading] = useState(true);

  const [resume, setResume] = useState([]);

  console.info("RESUME : ", resume);

  // const toolsCandidate = {
  //   fetchResume: () => fetchResume(),
  // };

  useEffect(() => {
    readAllResume()
      .then((allResume) => setResume(allResume))
      .then(() => setIsLoading(false));
  }, []);

  const getFirstLetter = () => {
    if (isLoading === false) {
      const { firstname } = resume.infos;
      return firstname.charAt(0);
    }
    return "";
  };

  const displayResume = () => {
    return (
      <div className="candidate_infos_container">
        <div>
          <div className="candidate_infos_header">
            <div>{getFirstLetter()}</div>
            <h1>Développeur/Développeuse {resume.infos.appetence}</h1>
          </div>

          <div className="modify_display_in_desktop">
            <div>
              <h2>Qui suis-je ?</h2>
              <p>{resume.infos && resume.infos.biography}</p>
            </div>

            <section className="candidate_expectations_container">
              <h2>Ma recherche</h2>
              <WorkingConditionsCard data={resume.infos} />
            </section>
          </div>

          <div className="skills_languages_experiences_desktop">
            <section className="soft_skills">
              <h2>Soft skills</h2>
              <div />
            </section>

            <section className="computer_languages_container">
              <h2>Langages informatiques</h2>
              <ul>
                {resume.programmingLanguages &&
                  resume.programmingLanguages.map((languages) => (
                    <li key={languages.id}>{languages.programming_language}</li>
                  ))}
              </ul>
              <div />
            </section>

            <section className="significatives_experiences">
              <h2>Expériences significatives</h2>
              <ul>
                {resume.experiences &&
                  resume.experiences.map((experience) => (
                    <li key={experience.id}>{experience.experiences}</li>
                  ))}
              </ul>
              <div />
            </section>
          </div>
        </div>
        <SwipeSystem
          candidateId={resume.infos.id}
          enterpriseId={loginUser.id}
          // fetchResume={() => fetchResume()}
          // toolsCandidate={{ toolsCandidate }}
          setIsLoading={setIsLoading}
          setResume={setResume}
        />
      </div>
    );
  };
  return isLoading ? "" : displayResume();
}

export default CandidateCandidacy;

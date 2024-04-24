import { useState, useEffect, useContext } from "react";

import { readAllResume } from "../../services/resumesService";

import LoginUserContext from "../../context/LoginUserContext";

import SwipeSystem from "./SwipeSystem";
import WorkingConditionsCard from "./WorkingConditionsCard";

import nothingToSeeIcon from "../../assets/triste.png";

import "../../styles/content_to_swipe/candidateCandidacy.css";

function CandidateCandidacy() {
  const { loginUser } = useContext(LoginUserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [resume, setResume] = useState({});

  const [refreshResume, setRefreshResume] = useState(1);

  const triggerResumeRefresh = () => {
    setRefreshResume(Math.random());
  };

  useEffect(() => {
    readAllResume()
      .then((allResume) => setResume(allResume))
      .then(() => setIsLoading(false));
  }, [refreshResume]);

  const getFirstLetter = () => {
    if (isLoading === false) {
      const { firstname } = resume.infos;
      return firstname.charAt(0);
    }
    return "";
  };

  const displayResume = () => {
    if (!isLoading) {
      if (!resume || !resume.infos) {
        return (
          <div className="nothing_to_see_container">
            <img
              src={nothingToSeeIcon}
              alt="sad icon because there is nothing to see"
            />
            <h1>Il n'y a plus rien à liker aujourd'hui..</h1>
            <h2>Revenez demain !</h2>
          </div>
        );
      }
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
                      <li key={languages.id}>
                        {languages.programming_language}
                      </li>
                    ))}
                </ul>
              </section>

              <section className="significatives_experiences">
                <h2>Expériences significatives</h2>
                <ul>
                  {resume.experiences &&
                    resume.experiences.map((experience) => (
                      <li key={experience.id}>{experience.experiences}</li>
                    ))}
                </ul>
              </section>
            </div>
          </div>
          <SwipeSystem
            resumeId={resume.infos.resumeId}
            enterpriseId={loginUser.id}
            setIsLoading={setIsLoading}
            triggerRefresh={triggerResumeRefresh}
          />
        </div>
      );
    }
    return null;
  };
  return isLoading ? "" : displayResume();
}

export default CandidateCandidacy;

/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import LoginUserContext from "../../context/LoginUserContext";

import SwipeSystem from "./SwipeSystem";
import WorkingConditionsCard from "./WorkingConditionsCard";

import "../../styles/content_to_swipe/candidateCandidacy.css";

function CandidateCandidacy() {
  const { loginUser } = useContext(LoginUserContext);

  const [isLoading, setIsLoading] = useState(true);

  const [resume, setResume] = useState([]);

  console.info("RESUME : ", resume);

  const fetchResume = () => {
    axios
      .get("http://localhost:3310/api/resume")
      .then((response) => {
        console.info("RESPONSE : ", response);
        setResume(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  const toolsCandidate = {
    fetchResume: () => fetchResume(),
  };

  useEffect(() => {
    fetchResume();
  }, []);

  const getFirstLetter = () => {
    if (isLoading === false) {
      const { firstname } = resume[0].infos[0];
      return firstname.charAt(0);
    }
    return "";
  };

  const displayResume = () => {
    console.info("ID CANDIDATE: ", resume[0].infos[0].id);

    return (
      <div className="candidate_infos_container">
        <div>
          <div className="candidate_infos_header">
            <div>{getFirstLetter()}</div>
            <h1>Développeur/Développeuse</h1>
          </div>

          <div className="modify_display_in_desktop">
            <div>
              <h2>Qui suis-je ?</h2>
              <p>{resume[0].infos[0].biography}</p>
            </div>

            <section className="candidate_expectations_container">
              <h2>Ma recherche</h2>
              <WorkingConditionsCard data={resume[0]} />
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
                {resume[0].langues.map((langue) => (
                  <li>{langue.languages}</li>
                ))}
              </ul>
              <div />
            </section>

            <section className="significatives_experiences">
              <h2>Expériences significatives</h2>
              <div />
            </section>
          </div>
        </div>
        <SwipeSystem
          candidateId={resume[0].infos[0].id}
          enterpriseId={loginUser.id}
          fetchResume={() => fetchResume()}
          toolsCandidate={{ toolsCandidate }}
          setIsLoading={setIsLoading}
          setResume={setResume}
        />
      </div>
    );
  };
  return isLoading ? "" : displayResume();
}

export default CandidateCandidacy;

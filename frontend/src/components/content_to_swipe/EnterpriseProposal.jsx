import React, { useEffect, useState, useContext } from "react";

import { readAllOffer } from "../../services/jobOffersService";

import LoginUserContext from "../../context/LoginUserContext";

import SwipeSystem from "./SwipeSystem";
import WorkingConditionsCard from "./WorkingConditionsCard";

import "../../styles/content_to_swipe/enterpriseProposal.css";

function EnterpriseProposal() {
  const { loginUser } = useContext(LoginUserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [jobOffer, setJobOffer] = useState([]);

  useEffect(() => {
    readAllOffer()
      .then((allOffers) => setJobOffer(allOffers))
      .then(() => setIsLoading(false));
  }, []);

  const getFirstLetter = () => {
    if (isLoading === false) {
      const { name } = jobOffer.infos;
      return name.charAt(0);
    }
    return "";
  };

  const displayJobOffer = () => {
    return (
      <div className="enterprise_infos_container">
        <div>
          <div className="enterprise_infos_header">
            <div>{getFirstLetter()}</div>
            <h1>Développeur/Développeuse {jobOffer.infos.appetence}</h1>
          </div>

          <div className="modify_display_in_desktop">
            <div>
              <h2>Qui sommes-nous ?</h2>
              <p>{jobOffer.infos && jobOffer.infos.description}</p>
            </div>

            <section className="enterprise_proposal_container">
              <h2>Conditions de travail</h2>
              <WorkingConditionsCard data={jobOffer.infos} />
            </section>
          </div>

          <div className="languages_missions_desktop">
            <section className="computer_languages_container">
              <h2>Langages informatiques</h2>
              <ul>
                {jobOffer.programmingLanguages &&
                  jobOffer.programmingLanguages.map((languages) => (
                    <li key={languages.id}>{languages.programming_language}</li>
                  ))}
              </ul>
              <div />
            </section>

            <section className="missions">
              <h2>Missions Principales</h2>
              <ul>
                {jobOffer.missions &&
                  jobOffer.missions.map((mission) => (
                    <li key={mission.id}>{mission.missions}</li>
                  ))}
              </ul>
              <div />
            </section>
          </div>
        </div>
        <SwipeSystem
          jobOfferId={jobOffer.infos.jobOfferId}
          candidateId={loginUser.id}
          setJobOffer={setJobOffer}
        />
      </div>
    );
  };

  return isLoading ? "" : displayJobOffer();
}

export default EnterpriseProposal;

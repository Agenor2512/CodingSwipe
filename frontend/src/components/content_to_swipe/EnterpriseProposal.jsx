import React, { useEffect, useState, useContext } from "react";

import { readAllOffer } from "../../services/jobOffersService";

import LoginUserContext from "../../context/LoginUserContext";

import SwipeSystem from "./SwipeSystem";
import WorkingConditionsCard from "./WorkingConditionsCard";

import nothingToSeeIcon from "../../assets/triste.png";

import "../../styles/content_to_swipe/enterpriseProposal.css";

function EnterpriseProposal() {
  const { loginUser } = useContext(LoginUserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [jobOffer, setJobOffer] = useState({});

  const [refreshOffer, setRefreshOffer] = useState(1);

  const triggerOfferRefresh = () => {
    setRefreshOffer(Math.random());
  };

  useEffect(() => {
    readAllOffer()
      .then((allOffers) => setJobOffer(allOffers))
      .then(() => setIsLoading(false));
  }, [refreshOffer]);

  const getFirstLetter = () => {
    if (isLoading === false) {
      const { name } = jobOffer.infos;
      return name.charAt(0);
    }
    return "";
  };

  const displayJobOffer = () => {
    if (!isLoading) {
      if (!jobOffer || !jobOffer.infos) {
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
                      <li key={languages.id}>
                        {languages.programming_language}
                      </li>
                    ))}
                </ul>
              </section>

              <section className="missions">
                <h2>Missions Principales</h2>
                <ul>
                  {jobOffer.missions &&
                    jobOffer.missions.map((mission) => (
                      <li key={mission.id}>{mission.missions}</li>
                    ))}
                </ul>
              </section>
            </div>
          </div>
          <SwipeSystem
            jobOfferId={jobOffer.infos.jobOfferId}
            candidateId={loginUser.id}
            setJobOffer={setJobOffer}
            triggerRefresh={triggerOfferRefresh}
          />
        </div>
      );
    }
    return null;
  };

  return isLoading ? "" : displayJobOffer();
}

export default EnterpriseProposal;

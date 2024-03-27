import React, { useState, useEffect } from "react";
import axios from "axios";

import SwipeSystem from "./SwipeSystem";
import WorkingConditionsCard from "./WorkingConditionsCard";

import "../../styles/content_to_swipe/enterpriseProposal.css";

function EnterpriseProposal() {
  const [isLoading, setIsLoading] = useState(true);

  const [jobOffer, setJobOffer] = useState([]);

  const fetchJobOffer = () => {
    axios
      .get("http://localhost:3310/api/joboffer")
      .then((response) => {
        console.info("RESPONSE : ", response);
        setJobOffer(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchJobOffer();
  }, []);

  const getFirstLetter = () => {
    if (isLoading === false) {
      const { name } = jobOffer[0].infos[0];
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
            <h1>Développeur/Développeuse</h1>
          </div>

          <div className="modify_display_in_desktop">
            <div>
              <h2>Qui sommes-nous ?</h2>
              <p>{jobOffer[0].infos[0].description}</p>
            </div>

            <section className="enterprise_proposal_container">
              <h2>Conditions de travail</h2>
              <WorkingConditionsCard data={jobOffer[0]} />
            </section>
          </div>

          <div className="languages_missions_desktop">
            <section className="computer_languages_container">
              <h2>Langages informatiques</h2>
              <ul>
                {jobOffer[0].langues.map((langue) => (
                  <li>{langue.programming_languages}</li>
                ))}
              </ul>
              <div />
            </section>

            <section className="missions">
              <h2>Missions Principales</h2>
              <div />
            </section>
          </div>
        </div>
        <SwipeSystem />
      </div>
    );
  };

  return isLoading ? "" : displayJobOffer();
}

export default EnterpriseProposal;

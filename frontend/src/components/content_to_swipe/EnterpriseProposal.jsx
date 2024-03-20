import React from "react";

import SwipeSystem from "./SwipeSystem";
import WorkingConditionsCard from "./WorkingConditionsCard";

import "../../styles/content_to_swipe/enterpriseProposal.css";

function EnterpriseProposal() {
  const enterpriseDescription =
    "Passionné par le développement et animé par l'innovation, je suis un développeur junior déterminé à apporter ma curiosité technique et ma créativité au sein d'une startup dynamique.";

  return (
    <div className="enterprise_infos_container">
      <div>
        <div className="enterprise_infos_header">
          <div>W</div>
          <h1>Développeur/Développeuse</h1>
        </div>

        <div className="modify_display_in_desktop">
          <div>
            <h2>Qui sommes-nous ?</h2>
            <p>{enterpriseDescription}</p>
          </div>

          <section className="enterprise_proposal_container">
            <h2>Conditions de travail</h2>
            <WorkingConditionsCard />
          </section>
        </div>

        <div className="languages_missions_desktop">
          <section className="computer_languages_container">
            <h2>Langages informatiques</h2>
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
}

export default EnterpriseProposal;

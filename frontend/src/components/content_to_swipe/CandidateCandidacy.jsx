import React from "react";

import SwipeSystem from "./SwipeSystem";
import WorkingConditionsCard from "./WorkingConditionsCard";

import "../../styles/content_to_swipe/candidateCandidacy.css";

function CandidateCandidacy() {
  const candidateId = "2de1feec-a12a-4f16-9226-af752acdab44";
  const enterpriseId = "2de1feec-a12a-4f16-9226-af752acdab44";

  const candidateDescription =
    "Passionné par le développement et animé par l'innovation, je suis un développeur junior déterminé à apporter ma curiosité technique et ma créativité au sein d'une startup dynamique.";

  return (
    <div className="candidate_infos_container">
      <div>
        <div className="candidate_infos_header">
          <div>W</div>
          <h1>Développeur/Développeuse</h1>
        </div>

        <div className="modify_display_in_desktop">
          <div>
            <h2>Qui suis-je ?</h2>
            <p>{candidateDescription}</p>
          </div>

          <section className="candidate_expectations_container">
            <h2>Ma recherche</h2>
            <WorkingConditionsCard />
          </section>
        </div>

        <div className="skills_languages_experiences_desktop">
          <section className="soft_skills">
            <h2>Soft skills</h2>
            <div />
          </section>

          <section className="computer_languages_container">
            <h2>Langages informatiques</h2>
            <div />
          </section>

          <section className="significatives_experiences">
            <h2>Expériences significatives</h2>
            <div />
          </section>
        </div>
      </div>
      <SwipeSystem candidateId={candidateId} enterpriseId={enterpriseId} />
    </div>
  );
}

export default CandidateCandidacy;

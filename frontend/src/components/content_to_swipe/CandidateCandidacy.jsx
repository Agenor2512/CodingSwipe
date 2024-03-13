import React from "react";

import "../../styles/content_to_swipe/candidateCandidacy.css";

function CandidateCandidacy() {
  const candidateDescription =
    "Passionné par le développement et animé par l'innovation, je suis un développeur junior déterminé à apporter ma curiosité technique et ma créativité au sein d'une startup dynamique.";

  return (
    <div className="candidate_infos_container">
      <div className="candidate_infos_header">
        <div>W</div>
        <section>
          <h1>Développeur/Développeuse</h1>
        </section>
      </div>

      <div className="modify_display_in_desktop">
        <div>
          <h2>Qui suis-je ?</h2>
          <p>{candidateDescription}</p>
        </div>

        <section className="candidate_expectations_container">
          <h2>Ma recherche</h2>
          <div />
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
  );
}

export default CandidateCandidacy;

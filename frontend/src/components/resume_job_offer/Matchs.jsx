import React, { useEffect, useState, useContext } from "react";

import {
  readCandidateMatchesById,
  readEnterpriseMatchesById,
} from "../../services/matchesService";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/matchs.css";

function Matchs() {
  function getFirstLetter(name) {
    return name.charAt(0).toUpperCase();
  }
  const {
    loginUser: { id, role },
  } = useContext(LoginUserContext);

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (role === "candidate") {
      readCandidateMatchesById(id).then((allMatches) => setMatches(allMatches));
    } else if (role === "enterprise") {
      readEnterpriseMatchesById(id).then((allMatches) =>
        setMatches(allMatches)
      );
    }
  }, []);

  console.info("Matches : ", matches);

  return (
    <section className="match_container">
      {matches &&
        matches.map((match) => (
          <div key={match.id} className="match_card">
            {role === "candidate" ? (
              <div className="match_card_content">
                <div className="first_content_block">
                  {getFirstLetter(match.name)}
                </div>

                <div className="second_content_block">
                  <div className="bold_font">
                    <span>{match.name} </span>
                  </div>
                  <div className="font_content"> {match.department}</div>
                  <div className="font_content"> {match.work_rhythm}</div>
                  <div className="font_content"> {match.salary}</div>
                </div>
              </div>
            ) : (
              <div className="match_card_content">
                <div className="first_content_block">
                  {getFirstLetter(match.firstname)}
                </div>

                <div className="second_content_block">
                  <div className="bold_font">
                    <span>{match.firstname}</span>
                  </div>
                  <div className="font_content"> {match.appetence}</div>
                  <div className="font_content"> {match.contract_type}</div>
                </div>
              </div>
            )}
          </div>
        ))}
    </section>
  );
}

export default Matchs;

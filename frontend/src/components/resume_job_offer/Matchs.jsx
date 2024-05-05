import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

import {
  readCandidateMatchesById,
  readEnterpriseMatchesById,
} from "../../services/matchesService";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/matchs.css";

function Matchs({ refreshMatches }) {
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
  }, [refreshMatches]);

  console.info("Matches : ", matches);

  return (
    <section className="match_container">
      {matches &&
        matches.map((match) => (
          <div key={match.name} className="match_card">
            {role === "candidate" ? (
              <div className="match_card_content">
                <div>{getFirstLetter(match.name)}</div>

                <ul>
                  <li className="bold_font">{match.name}</li>
                  <li> {match.work_rhythm}</li>
                  <li> {match.salary}</li>
                </ul>
              </div>
            ) : (
              <div className="match_card_content">
                <div>{getFirstLetter(match.firstname)}</div>

                <ul>
                  <li className="bold_font">{match.firstname}</li>
                  <li> {match.appetence}</li>
                  <li> {match.contract_type}</li>
                </ul>
              </div>
            )}
          </div>
        ))}
    </section>
  );
}

Matchs.propTypes = {
  refreshMatches: PropTypes.func.isRequired,
};

export default Matchs;

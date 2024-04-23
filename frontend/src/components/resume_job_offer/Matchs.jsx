import React, { useEffect, useState, useContext } from "react";

import readMatchesById from "../../services/matchesService";

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
    readMatchesById({ id, role }).then((allMatches) => setMatches(allMatches));
  }, []);

  console.info("Matches : ", matches);

  return (
    <section className="match_container">
      {matches &&
        matches.map((match) => (
          <div key={match.id} className="match_card">
            {role === "candidat" ? (
              <div>
                <div>{getFirstLetter(match.name)}</div>
                <div>{match.description}</div>
                <div>{match.email}</div>
              </div>
            ) : (
              <div className="match_card_content">
                <div className="first_content_block">{match.firstname}</div>

                <div className="second_content_block">
                  <div className="bold_font">
                    <span>{match.appetence} </span>
                  </div>
                  <div className="font_content"> {match.email}</div>
                </div>
              </div>
            )}
          </div>
        ))}
    </section>
  );
}

export default Matchs;

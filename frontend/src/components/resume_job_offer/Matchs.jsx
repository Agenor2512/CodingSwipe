import { useContext } from "react";
import PropTypes from "prop-types";
import RegisterContext from "../../context/RegisterContext";
import "../../styles/resume_job_offer/matchs.css";

function getFirstLetter(name) {
  return name.charAt(0).toUpperCase();
}

function Matchs({ matchesData }) {
  const { userRole } = useContext(RegisterContext);

  return (
    <section className="match_container">
      {userRole === "match" &&
        matchesData.map((match) => (
          <div key={match.id} className="match_card">
            {userRole === "candidat" ? (
              <div>
                <div>{getFirstLetter(match.name)}</div>
                <div>{match.category}</div>
                <div>{match.region}</div>
                <div>{match.jobName}</div>
              </div>
            ) : (
              <div className="match_card_content">
                <div className="first_content_block">
                  {getFirstLetter(match.name)}
                </div>

                <div className="second_content_block">
                  <div>
                    <span style={{ fontWeight: "bold" }}>{match.category}</span>
                    {`-${match.date}`}
                  </div>
                  <div className="font_content"> {match.jobName}</div>
                </div>
              </div>
            )}
          </div>
        ))}
    </section>
  );
}

Matchs.propTypes = {
  matchesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      jobName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Matchs;

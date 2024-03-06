import PropTypes from "prop-types";

function Matchs({ userType, matchesData }) {
  return (
    <div className="matches_container">
      {userType === "match" &&
        matchesData.map((match) => (
          <div key={match.id} className="match_card">
            {userType === "candidat" ? (
              <>
                <div>Initiale id entreprise : {match.name}</div>
                <div>{match.category}</div>
                <div>Région de l'employeur: {match.region}</div>
                <div>Intitulé du poste {match.jobName}</div>
              </>
            ) : (
              <>
                <div>Initial du candidat : {match.name}</div>
                <div>Intitulé de son poste: {match.category}</div>
                <div>Date: {match.date}</div>
                <div>Intitulé du poste qu'il a liké {match.jobName}</div>
              </>
            )}
          </div>
        ))}
    </div>
  );
}

Matchs.propTypes = {
  userType: PropTypes.string.isRequired,
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

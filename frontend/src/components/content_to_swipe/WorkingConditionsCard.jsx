import React, { useContext } from "react";
import PropTypes from "prop-types";

import contract from "../../assets/contract.png";
import mobility from "../../assets/mobility.png";
import salary from "../../assets/salary.png";
import work from "../../assets/work.png";

import LoginUserContext from "../../context/LoginUserContext";

import "../../styles/content_to_swipe/workingConditionsCard.css";

function WorkingConditionsCard({ data }) {
  const { loginUser } = useContext(LoginUserContext);

  const enterpriseConditions = [
    { id: 0, icon: contract, text: data.contract_type },
    { id: 1, icon: mobility, text: data.department },
    { id: 2, icon: work, text: data.work_rhythm },
    {
      id: 3,
      icon: salary,
      text: data.salary ? data.salary : "Salaire : non précisé",
    },
  ];

  const candidateConditions = [
    { id: 0, icon: contract, text: data.contract_type },
    { id: 1, icon: mobility, text: data.department },
    { id: 2, icon: work, text: data.work_rhythm },
  ];

  return (
    <div>
      {loginUser.role === "candidate"
        ? enterpriseConditions.map((enterpriseCondition) => (
            <div key={enterpriseCondition.id}>
              <img src={enterpriseCondition.icon} alt="card icon" />
              <p>{enterpriseCondition.text}</p>
            </div>
          ))
        : candidateConditions.map((candidateCondition) => (
            <div key={candidateCondition.id}>
              <img src={candidateCondition.icon} alt="card icon" />
              <p>{candidateCondition.text}</p>
            </div>
          ))}
    </div>
  );
}

WorkingConditionsCard.propTypes = {
  data: PropTypes.shape({
    contract_type: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    work_rhythm: PropTypes.string.isRequired,
    salary: PropTypes.string,
  }).isRequired,
};

export default WorkingConditionsCard;

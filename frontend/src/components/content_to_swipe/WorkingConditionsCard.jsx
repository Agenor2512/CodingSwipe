/* eslint-disable react/prop-types */
import React from "react";

import contract from "../../assets/contract.png";
import mobility from "../../assets/mobility.png";
import salary from "../../assets/salary.png";
import work from "../../assets/work.png";

import "../../styles/content_to_swipe/workingConditionsCard.css";

function WorkingConditionsCard({ data }) {
  const conditions = [
    { id: 0, icon: contract, text: data.infos[0].contract },
    { id: 1, icon: mobility, text: data.infos[0].department },
    { id: 2, icon: work, text: data.infos[0].rhythm },
    { id: 3, icon: salary, text: "Salaire : Non précisé" },
  ];

  return (
    <div>
      {conditions.map((condition) => (
        <div key={condition.id}>
          <img src={condition.icon} alt="card icon" />
          <p>{condition.text}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkingConditionsCard;

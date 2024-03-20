import React from "react";

import contract from "../../assets/contract.png";
import mobility from "../../assets/mobility.png";
import salary from "../../assets/salary.png";
import work from "../../assets/work.png";

import "../../styles/content_to_swipe/workingConditionsCard.css";

function WorkingConditionsCard() {
  const conditions = [
    { id: 0, icon: contract, text: "Stage/Alternance" },
    { id: 1, icon: mobility, text: "Alpes de Haute Provence" },
    { id: 2, icon: work, text: "Full remote" },
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

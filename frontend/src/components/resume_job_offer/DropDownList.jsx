/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "../../styles/resume_job_offer/dropDownList.css";

function DropDownList() {
  const userSpecialty = [
    {
      key: "frontend",
      text: "Frontend",
    },
    {
      key: "backend",
      text: "Backend",
    },
    {
      key: "full-stack",
      text: "Full stack",
    },
  ];

  const [specialty, setSpecialty] = useState("");

  const handleChangeSpecialty = (event) => {
    setSpecialty(event.target.value);
  };

  return (
    <select onChange={handleChangeSpecialty}>
      <option value="">BDD value</option>
      {userSpecialty.map(({ key, text }) => (
        <option key={key} value={text}>
          {text}
        </option>
      ))}
    </select>
  );
}

export default DropDownList;

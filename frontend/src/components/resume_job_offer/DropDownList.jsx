/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "../../styles/resume_job_offer/dropDownList.css";

function DropDownList({ appetences, userAppetence }) {
  const [specialty, setSpecialty] = useState("");

  const handleChangeSpecialty = (event) => {
    setSpecialty(event.target.value);
  };

  return (
    <select onChange={handleChangeSpecialty}>
      <option value="">{userAppetence}</option>
      {appetences.map(({ id, appetence }) => (
        <option key={id} value={appetence}>
          {appetence}
        </option>
      ))}
    </select>
  );
}

export default DropDownList;

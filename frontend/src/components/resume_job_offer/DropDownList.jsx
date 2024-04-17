/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

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

DropDownList.propTypes = {
  appetences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      appetence: PropTypes.string.isRequired,
    })
  ).isRequired,
  userAppetence: PropTypes.string.isRequired,
};

export default DropDownList;

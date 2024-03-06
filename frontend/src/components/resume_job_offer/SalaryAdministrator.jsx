/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "../../styles/resume_job_offer/salaryAdministrator.css";

function SalaryAdministrator() {
  const [unlock, setUnlock] = useState(true);
  const [salaryValue, setSalaryValue] = useState("");

  const handleChange = (event) => {
    setSalaryValue(event.target.value);
  };

  const handleClickUnlock = () => {
    setUnlock(!unlock);
  };

  const displayedValue = unlock ? salaryValue : `${salaryValue} €`;

  return (
    <>
      <input
        type="text"
        id="salary"
        name="salary"
        className={unlock ? "" : "disabled"}
        value={displayedValue}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={() => handleClickUnlock()}
        className={unlock ? "unlocked" : "locked"}
      >
        {" . "}
      </button>
    </>
  );
}

export default SalaryAdministrator;

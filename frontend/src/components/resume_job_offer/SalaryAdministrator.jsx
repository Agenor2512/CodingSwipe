/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";

import { readSalaryById, modifySalary } from "../../services/salaryService";

import LoginContext from "../../context/LoginUserContext";

import "../../styles/resume_job_offer/salaryAdministrator.css";

function SalaryAdministrator() {
  const {
    loginUser: { id },
  } = useContext(LoginContext);
  const [unlock, setUnlock] = useState(false);
  const [salaryValue, setSalaryValue] = useState("");

  const fetchSalary = () => {
    readSalaryById(id).then((salary) => setSalaryValue(salary));
  };

  const handleClickUnlock = () => {
    setUnlock(!unlock);
    modifySalary(id, { salary: salaryValue }).then(() => {
      fetchSalary();
    });
  };

  const handleChange = (event) => {
    setSalaryValue(event.target.value);
  };

  const displayedValue = unlock
    ? salaryValue.salary
    : `${salaryValue.salary} €`;
  console.info("Salary value :", salaryValue.salary);

  useEffect(() => {
    fetchSalary();
  }, []);

  return (
    <>
      <input
        type="text"
        id="salary"
        name="salary"
        className={unlock ? "" : "disabled"}
        value={displayedValue}
        onChange={(event) => handleChange(event)}
      />
      <button
        type="button"
        onClick={handleClickUnlock}
        className={unlock ? "unlocked" : "locked"}
      >
        {" . "}
      </button>
    </>
  );
}

export default SalaryAdministrator;

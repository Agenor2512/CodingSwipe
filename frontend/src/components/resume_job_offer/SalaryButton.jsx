/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function SalaryButton() {
  const [unlock, setUnlock] = useState(true);

  const lock = () => {
    setUnlock(false);
  };

  const notLock = () => {
    setUnlock(true);
  };

  return <button type="button">{" . "}</button>;
}

export default SalaryButton;

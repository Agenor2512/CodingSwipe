/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

const RegisterContext = createContext();

export function RegisterProvider({ children }) {
  const [infos, setInfos] = useState({
    userRole: "enterprise",
    username: "",
    lastname: "",
    siretNumber: "",
    legalStatus: "",
    businessSector: "",
    description: "",
    appetence: "",
    contractType: [],
    workRhythm: [],
    level: "",
    programmingLanguages: [],
    email: "",
    password: "",
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RegisterContext.Provider value={{ infos, setInfos }}>
      {children}
    </RegisterContext.Provider>
  );
}

export default RegisterContext;

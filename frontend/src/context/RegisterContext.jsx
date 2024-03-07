/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const RegisterContext = createContext();

export function RegisterProvider({ children }) {
  const [infos, setInfos] = useState({
    userRole: "enterprise",
    name: "",
    siretNumber: "",
    legalStatus: "",
    businessSector: "",
    description: "",
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

/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const RegisterContext = createContext();

export function RegisterProvider({ children }) {
  const [userRole, setUserRole] = useState("enterprise");
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RegisterContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </RegisterContext.Provider>
  );
}

export default RegisterContext;

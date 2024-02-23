/* eslint-disable react/prop-types */
import React, { createContext, useState, useMemo } from "react";

const RegisterContext = createContext();

export function RegisterProvider({ children }) {
  const [userRole, setUserRole] = useState("enterprise");

  const useMemoValue = useMemo(
    () => ({
      userRole,
      setUserRole,
    }),
    [userRole]
  );

  return (
    <RegisterContext.Provider value={useMemoValue}>
      {children}
    </RegisterContext.Provider>
  );
}

export default RegisterContext;

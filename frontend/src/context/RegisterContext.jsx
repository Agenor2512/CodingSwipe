/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const RegisterContext = createContext();

export function RegisterProvider({ children }) {
  const [userRole, setUserRole] = useState("enterprise");
  const [name, setName] = useState("");
  const [siretNumber, setSiretNumber] = useState("");
  const [legalStatus, setLegalStatus] = useState("");
  const [businessSector, setBusinessSector] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RegisterContext.Provider
      value={
        ({ userRole, setUserRole },
        { name, setName },
        { siretNumber, setSiretNumber },
        { legalStatus, setLegalStatus },
        { businessSector, setBusinessSector },
        { description, setDescription },
        { email, setEmail },
        { password, setPassword })
      }
    >
      {children}
    </RegisterContext.Provider>
  );
}

export default RegisterContext;

/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState, useEffect } from "react";

const LoginUserContext = createContext();

export function LoginUserProvider({ children }) {
  const [loginUser, setLoginUser] = useState({
    email: localStorage.getItem("email"),
  });

  useEffect(() => {
    localStorage.setItem("email", loginUser.email);
  }, [loginUser]);

  const props = useMemo(() => ({ loginUser, setLoginUser }), [loginUser]);

  return (
    <LoginUserContext.Provider value={props}>
      {children}
    </LoginUserContext.Provider>
  );
}

export default LoginUserContext;

import React, { createContext, useState } from "react";

const AppContext = createContext();

export default AppContext;

export const AppContextProvider = ({ children }) => {
  const [greeting, setGreeting] = useState("Hello world!");
  return (
    <AppContext.Provider value={{ greeting, setGreeting }}>
      {children}
    </AppContext.Provider>
  );
};

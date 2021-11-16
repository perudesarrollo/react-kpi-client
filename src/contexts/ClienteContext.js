import React, { createContext, useState, useEffect } from "react";
export const ClienteContext = createContext();
const ClienteContextProvider = ({ children }) => {
  const [cliente, setCliente] = useState([]);
  useEffect(() => {
  }, [])

  return (
    <ClienteContext.Provider value={{ cliente, setCliente }}>
      {children}
    </ClienteContext.Provider>
  );
};

export default ClienteContextProvider;
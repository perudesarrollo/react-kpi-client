import React, { createContext, useState, useEffect } from "react";
export const KpiContext = createContext();
const KpiContextProvider = ({ children }) => {
  const [kpi, setKpi] = useState([]);
  useEffect(() => {
  }, [])

  return (
    <KpiContext.Provider value={{ kpi, setKpi }}>
      {children}
    </KpiContext.Provider>
  );
};

export default KpiContextProvider;

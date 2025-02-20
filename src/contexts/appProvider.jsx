import { useState } from "react";
import { AppContext } from "./appContext";

export const AppProvider = ({ children }) => {
  const [qqcoisa, setQqcoisa] = useState(10);

  return (
    <AppContext.Provider value={{ qqcoisa, setQqcoisa }}>
      {children}
    </AppContext.Provider>
  );
};

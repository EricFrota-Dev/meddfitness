import { useState } from "react";

function useApp() {
  const [isNavOppen, setIsNavOppen] = useState(false);

  return {
    isNavOppen,
    setIsNavOppen,
  };
}

export default useApp;

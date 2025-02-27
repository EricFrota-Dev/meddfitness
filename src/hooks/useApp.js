import { useState, useEffect } from "react";

function useApp() {
  const [isNavOppen, setIsNavOppen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsNavOppen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsNavOppen]);

  return {
    isNavOppen,
    setIsNavOppen,
  };
}

export default useApp;

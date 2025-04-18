import { useEffect, useState } from "react";

const usePersistedState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const stored = sessionStorage.getItem(key);
      if (stored === null || stored === "undefined") return defaultValue;
      return JSON.parse(stored);
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Erreur de sauvegarde dans sessionStorage:", err);
    }
  }, [key, value]);

  return [value, setValue];
};

export default usePersistedState;

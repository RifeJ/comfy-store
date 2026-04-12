// useDebounce.js
import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler); // Очищаем таймер, если пользователь нажал клавишу снова
  }, [value, delay]);

  return debouncedValue;
};

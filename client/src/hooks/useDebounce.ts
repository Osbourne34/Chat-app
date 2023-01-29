import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay = 300) => {
  const [debounce, setDebounce] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [value]);

  return debounce;
};

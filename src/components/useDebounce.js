import { useEffect, useState } from 'react';

export function useDebounce(value, delay) {
  const [finalValue, setFinalValue] = useState('');

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setFinalValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [value, delay]);

  return finalValue;
}

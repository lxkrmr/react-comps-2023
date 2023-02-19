import { useState, useEffect } from 'react';

function useCounter(initialCount) {
  const [counter, setCounter] = useState(initialCount ?? 0);

  useEffect(() => console.log(counter), [counter]);

  const increment = () => setCounter((current) => current + 1);

  return {
    counter,
    increment,
  };
}

export default useCounter;

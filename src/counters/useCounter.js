import { useState } from "react";

export default function useCounter(initialValue = 0, step = 1) {
  const [counter, setCounter] = useState(initialValue);
  const decrement = () => setCounter(counter - step);
  const increment = () => setCounter(counter + step);

  return [counter, { increment, decrement }];
}

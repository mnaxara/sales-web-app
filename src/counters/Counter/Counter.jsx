import { number } from "prop-types";
import { useCounter } from "../../hooks";

export default function Counter({ initialValue = 0, step = 1 }) {
  const [counter, { increment, decrement }] = useCounter(initialValue, step);

  return (
    <>
      <p>{counter}</p>
      <button onClick={decrement}>{`- ${step}`}</button>
      <button onClick={increment}>{`+ ${step}`}</button>
    </>
  );
}

Counter.propTypes = {
  initialValue: number,
  step: number,
};

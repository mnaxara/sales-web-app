import { useState } from "react";

export default function useCondition() {
  const [conditionState, setConditionState] = useState("");
  const setCondition = (event) => setConditionState(event.currentTarget.value);

  return [conditionState, setCondition];
}

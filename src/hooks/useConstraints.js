import { useReducer } from "react";

/**
 * @typedef {object} ConstraintsState
 * @property {boolean} cost
 * @property {boolean} time
 * @property {boolean} scope
 */
const initialConstraintsState = (constraints) =>
  Object.fromEntries(constraints.map(({ name }) => [name, false]));

/**
 * @typedef {object} ConstraintAction
 * @property {string} type
 * @property {string} payload
 */
/**
 *
 * @param {ConstraintsState} state
 * @param {ConstraintAction} action
 * @returns ConstraintsState
 */
const constraintReducer = (state, action) => {
  console.log(state, action);
  switch (action) {
    case "TOGGLE_SCOPE":
      return {
        ...state,
        scope: !state.scope,
        cost: !state.scope ? true : state.cost,
        time: state.scope ? false : state.time,
      };
    case "TOGGLE_COST":
      return {
        ...state,
        cost: !state.cost,
        scope: state.cost ? false : state.scope,
        time: !state.cost ? true : state.time,
      };
    case "TOGGLE_TIME":
      return {
        ...state,
        time: !state.time,
        scope: !state.time,
      };
    default:
      return state;
  }
};

export default function useConstraints(constraints) {
  const [constraintsState, dispatch] = useReducer(
    constraintReducer,
    initialConstraintsState(constraints),
  );

  const CONSTRAINTS_TYPES = Object.fromEntries(
    constraints.map(({ name }) => [name, `TOGGLE_${name.toUpperCase()}`]),
  );

  const toggle = (name) => () => {
    dispatch(CONSTRAINTS_TYPES[name]);
  };

  return { constraintsState, toggle };
}

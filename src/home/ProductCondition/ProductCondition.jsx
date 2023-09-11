import { oneOf } from "prop-types";

/**
 *
 * @param {Object} props
 * @param {"new" | "used"} props.condition
 * @returns
 */
export default function ProductCondition({ condition }) {
  return condition === "used" ? "Occasion" : "Neuf";
}

ProductCondition.proptype = {
  condition: oneOf(["new", "used"]),
};

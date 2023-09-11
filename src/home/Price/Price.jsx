import { number, oneOf } from "prop-types";

const availableCurrencies = ["EUR", "USD"];

/**
 *
 * @param {Object} props
 * @param {number} props.value Price value
 * @param {string} props.currency Currency value
 * @returns
 */
export default function Price({ value, currency = "EUR" }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency,
  }).format(value);
}

Price.propType = {
  value: number,
  currency: oneOf(availableCurrencies),
};

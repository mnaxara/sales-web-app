import { number, oneOf } from "prop-types";

const availableCurrencies = ["EUR", "USD"];

/**
 *
 * @param {Object} props
 * @param {number} props.price Price value
 * @param {string} props.currency Currency value
 * @returns
 */
export default function Price({ price, currency = "EUR" }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency,
  }).format(price);
}

Price.propTypes = {
  price: number,
  currency: oneOf(availableCurrencies),
};

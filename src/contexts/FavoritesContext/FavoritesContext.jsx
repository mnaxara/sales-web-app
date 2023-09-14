import { array, node } from "prop-types";
import React, { createContext } from "react";
import { useSet } from "react-use";

const initialFavorites = [
  "8f9529db-6d6c-4ddd-a4f5-32a9a99b4552",
  "47e97e65-4626-4c19-95c3-599271bcbbe6",
];
const FavoritesContext = createContext(initialFavorites);
const useContext = () => React.useContext(FavoritesContext);

const Provider = ({ children, favorites = initialFavorites }) => {
  const [favoritesIds, { toggle }] = useSet(new Set(favorites));

  const toggleFavorite = (id) => () => toggle(id);
  return (
    <FavoritesContext.Provider
      value={{ favorites: Array.from(favoritesIds), toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

/**
 * FavoritesContext
 *
 * @example
 * import {FavoritesContext} from "../contexts"
 * <FavoritesContext favorites = {["1", "2"]}>
 *  <MyChildrenComponents/>
 * </FavoritesContext>
 *
 * //MyChildrenComponents.jsx
 * import {FavoritesContext} from "../contexts"
 *
 * export default function MyChildrenComponents({ id }) {
 * const { favorites, toggleFavorite } = FavoritesContext.useContext();
 * return (<Button onClick = {toggleFavorite(id)}/>)
 * }
 */
const CustomFavoritesContext = {
  Provider,
  useContext,
};

export default CustomFavoritesContext;

Provider.propTypes = {
  children: node,
  favorites: array,
};

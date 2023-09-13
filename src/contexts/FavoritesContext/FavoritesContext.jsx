import { array, node } from "prop-types";
import React, { createContext } from "react";

const initialFavorites = [
  "8f9529db-6d6c-4ddd-a4f5-32a9a99b4552",
  "47e97e65-4626-4c19-95c3-599271bcbbe6",
];
const FavoritesContext = createContext(initialFavorites);
const useContext = () => React.useContext(FavoritesContext);

const Provider = ({ children, favorites = initialFavorites }) => {
  return (
    <FavoritesContext.Provider value={{ favorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

const CustomFavoritesContext = {
  Provider,
  useContext,
};

export default CustomFavoritesContext;

Provider.propTypes = {
  children: node,
  favorites: array,
};

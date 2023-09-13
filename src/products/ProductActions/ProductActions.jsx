import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { string } from "prop-types";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export default function ProductActions({ id }) {
  const { favorites } = FavoritesContext.useContext();

  const toggleFavorite = (id) => () => {
    console.log(id);
  };
  return (
    <IconButton onClick={toggleFavorite(id)}>
      {favorites.includes(id) ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
}

ProductActions.propTypes = {
  id: string,
};

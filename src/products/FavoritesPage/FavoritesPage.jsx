import { LinearProgress, Typography } from "@mui/material";
import { productsColumns } from "../productColumns";
import { DataGrid } from "@mui/x-data-grid";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { useProductsById } from "../../hooks";

export default function FavoritesPage() {
  const { favorites } = FavoritesContext.useContext();
  const { isLoading, data: favoritesProducts } = useProductsById({
    ids: favorites,
  });

  return (
    <>
      <Typography variant="h1">Favoris</Typography>;{" "}
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DataGrid
          rows={favoritesProducts}
          columns={productsColumns}
          disableRowSelectionOnClick
          autoHeight
        />
      )}
    </>
  );
}

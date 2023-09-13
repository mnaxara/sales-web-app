import {
  LinearProgress,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useProductSearch, useProducts } from "../../hooks";
import { FormControl } from "@mui/base";
import { Stack } from "@mui/system";
import { productsColumns } from "../../products/productColumns";

export default function HomePage() {
  const { conditionState, setCondition, search, setSearch } =
    useProductSearch();
  const { isLoading, data: products } = useProducts({
    condition: conditionState,
    search,
  });

  const conditionFilter = [
    { label: "Tous", value: "" },
    { label: "Neuf", value: "new" },
    { label: "Occasion", value: "used" },
  ];

  return (
    <>
      <Stack
        direction="row"
        spacing={4}
        justifyContent="space-around"
        marginY={4}
      >
        <TextField
          id="product-search"
          label="Recherche"
          variant="standard"
          autoComplete="off"
          sx={{ width: "400px" }}
          value={search}
          onChange={setSearch}
        />
        <FormControl>
          <FormLabel id="condition-filter">Etat</FormLabel>
          <RadioGroup
            row
            aria-labelledby="condition-filter"
            name="condition-filter"
            value={conditionState}
            onChange={setCondition}
          >
            {conditionFilter.map((condition) => (
              <FormControlLabel
                key={condition.label}
                value={condition.value}
                control={<Radio />}
                label={condition.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Stack>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DataGrid
          rows={products}
          columns={productsColumns}
          disableRowSelectionOnClick
          autoHeight
        />
      )}
    </>
  );
}

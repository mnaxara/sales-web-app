import {
  LinearProgress,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Price } from "../../ds/atoms";
import { ProductCondition } from "../ProductCondition";
import { withDataGridRow } from "../../hoc";
import { ProductImage } from "../ProductImage";
import { ProductDescription } from "../ProductDescription";
import { useCondition, useProducts } from "../../hooks";
import { FormControl } from "@mui/base";
import { Stack } from "@mui/system";

export default function HomePage() {
  const [conditionState, setCondition] = useCondition();
  const { isLoading, data: products } = useProducts({
    condition: conditionState,
  });

  const productsColumns = [
    {
      field: "imageUrl",
      headerName: "Illustration",
      renderCell: withDataGridRow(ProductImage),
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      renderCell: withDataGridRow(ProductDescription),
    },
    {
      field: "price",
      headerName: "Prix",
      renderCell: withDataGridRow(Price),
    },
    {
      field: "condition",
      headerName: "Etat",
      renderCell: withDataGridRow(ProductCondition),
    },
    {
      field: "stock",
      headerName: "Stock",
    },
  ];

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
          sx={{ width: "400px" }}
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

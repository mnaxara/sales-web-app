import { Price } from "../ds/atoms";
import { withDataGridRow } from "../hoc";
import { ProductActions } from "./ProductActions";
import { ProductCondition } from "./ProductCondition";
import { ProductDescription } from "./ProductDescription";
import { ProductImage } from "./ProductImage";

export const productsColumns = [
  {
    field: "imageUrl",
    headerName: "Illustration",
    sortable: false,
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
  {
    field: "Actions",
    renderCell: withDataGridRow(ProductActions),
    sortable: false,
  },
];

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Price } from "../../ds/atoms";
import { ProductCondition } from "../ProductCondition";
import { withDataGridRow } from "../../hoc";
import { ProductImage } from "../ProductImage";
import { ProductDescription } from "../ProductDescription";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("http://localhost:3100/products/");
      const data = await response.json();
      setProducts(data);
    };

    fetchProduct();
  }, []);

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

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={products}
        columns={productsColumns}
        disableRowSelectionOnClick
        autoHeight
      />
    </Box>
  );
}

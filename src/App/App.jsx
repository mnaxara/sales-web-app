import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

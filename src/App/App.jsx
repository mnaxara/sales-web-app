import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

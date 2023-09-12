import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";

import { queryClient } from "./queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

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

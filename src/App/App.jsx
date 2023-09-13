import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";

import { queryClient } from "./queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { FavoritesContext } from "../contexts/FavoritesContext";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <FavoritesContext.Provider>
          <RouterProvider router={router} />
        </FavoritesContext.Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

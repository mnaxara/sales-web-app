import { createBrowserRouter } from "react-router-dom";
import { CountersPage } from "../counters/CountersPage";
import { HomePage } from "../home/HomePage";
import { MainTemplate } from "../ds/templates";
import { ProductPage } from "../products/ProductPage";
import { ProjectsPage } from "./projects/ProjectsPage";
import { FavoritesPage } from "../products/FavoritesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "counters",
        element: <CountersPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

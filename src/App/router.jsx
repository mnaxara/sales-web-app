import { createBrowserRouter } from "react-router-dom";
import { CountersPage } from "../counters/CountersPage";
import { HomePage } from "../home/HomePage";
import { MainTemplate } from "../ds/templates";

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
    ],
  },
]);

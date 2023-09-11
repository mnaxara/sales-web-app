import { createBrowserRouter } from "react-router-dom";
import { MainTemplate } from "../MainTemplate";
import { CountersPage } from "../counters/CountersPage";
import { HomePage } from "../home/HomePage";

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

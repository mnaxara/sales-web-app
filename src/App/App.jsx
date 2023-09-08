import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainTemplate } from "../MainTemplate";
import CountersPage from "../counters/CounterPage/CountersPage";
import { HomePage } from "../home/HomePage";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles.css";

const router = createBrowserRouter([
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

export default function App() {
  return <RouterProvider router={router} />;
}

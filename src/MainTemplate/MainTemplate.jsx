import { Outlet } from "react-router";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import "./styles.css";
import { Typography } from "@mui/material";

export default function MainTemplate() {
  const { pathname } = useLocation();
  const menu = [
    { to: "/", label: "Home" },
    { to: "/counters", label: "Counters" },
  ];

  return (
    <>
      <header>
        <nav>
          <ol>
            {menu.map(({ to, label }) => {
              return (
                <li key={label}>
                  <Link
                    to={to}
                    className={clsx("menu-item", { current: to === pathname })}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Typography>@ 2023 - Formation</Typography>
      </footer>
    </>
  );
}

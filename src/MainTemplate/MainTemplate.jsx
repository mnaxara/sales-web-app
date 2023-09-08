import { Outlet } from "react-router";
import { Link, useLocation } from "react-router-dom";

import "./styles.css";

export default function MainTemplate() {
  const { pathname } = useLocation();
  const menu = [
    { to: "/", label: "Home" },
    { to: "/counters", label: "Counters" },
  ];

  const renderNavItem = () => {
    return menu.map(({ to, label }) => {
      return (
        <li key={label}>
          <Link
            to={to}
            className={`menu-item ${to === pathname ? "current" : ""}`}
          >
            {label}
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <header>
        <nav>
          <ol>{renderNavItem()}</ol>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>@ 2023 - Formation</footer>
    </>
  );
}

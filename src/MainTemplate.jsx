import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function MainTemplate() {
  return (
    <>
      <header>
        <nav>
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counters">Counters</Link>
            </li>
            <li>Menu 3</li>
          </ol>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>@ 2023 - Formation</footer>
    </>
  );
}

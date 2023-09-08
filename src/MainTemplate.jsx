import { Outlet } from "react-router";

export default function MainTemplate() {
  return (
    <>
      <header>
        <nav>
          <ol>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ol>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
}

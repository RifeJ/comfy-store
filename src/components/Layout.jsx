import { Outlet } from "react-router";
import Header from "./Header";
import NavLinks from "./NavLinks";

const Layout = () => {
  return (
    <>
      <Header />
      <NavLinks />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

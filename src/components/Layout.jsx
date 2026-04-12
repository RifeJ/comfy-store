import { Outlet } from "react-router";
import Header from "./Header";
import NavLinks from "./NavLinks";

const Layout = () => {
  return (
    <>
      <Header />
      <NavLinks />
      <main>
        {/* This is where your pages (Main, About, etc.) will appear */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
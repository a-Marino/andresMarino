import { Nav } from "./Nav/Nav";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

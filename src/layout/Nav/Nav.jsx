import { motion } from "framer-motion";
import ScrollIntoView from "react-scroll-into-view";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Nav = () => {
  const { pathname } = useLocation();

  if (pathname === "/projects") {
    return (
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex justify-end w-full space-x-5  text-xl md:text-[1.5rem] fixed z-[2] py-3 px-5 Spline"
      >
        <NavLink
          to="/"
          className="hover:text-black transition-colors cursor-pointer duration-500"
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className="hover:text-black transition-colors cursor-pointer duration-500"
        >
          Projects
        </NavLink>
      </motion.header>
    );
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex justify-end w-full space-x-5  text-xl md:text-[1.5rem] fixed z-[2] py-3 px-5 Spline"
    >
      <ScrollIntoView
        smooth
        selector="#about"
        className="hover:text-black transition-colors cursor-pointer duration-500"
      >
        About
      </ScrollIntoView>
      <NavLink
        to="/projects"
        className="hover:text-black transition-colors cursor-pointer duration-500"
      >
        Projects
      </NavLink>
    </motion.header>
  );
};

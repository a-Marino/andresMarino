import { useRef, useEffect } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Nav = () => {
  const { pathname } = useLocation();
  const headerRef = useRef();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const color = entry.target.getAttribute("data-header-color");
          headerRef.current.style.color = color;
        }
      });
    }, observerOptions);

    const sectionElements = document.querySelectorAll(".landing-section");
    sectionElements.forEach((section) => observer.observe(section));
  }, [pathname]);

  if (pathname === "/projects") {
    return (
      <header className="flex justify-end w-full space-x-5  text-lg md:text-[1.5rem] fixed z-[2] py-3 px-3 md:px-10 kicaLight">
        <NavLink
          to="/"
          className="transition cursor-pointer duration-500 hover:scale-110 text-white"
        >
          Home
        </NavLink>
      </header>
    );
  }

  return (
    <header
      className="flex justify-end w-full space-x-5  text-lg md:text-[1.5rem] fixed z-[2] py-3 md:px-10 px-3 kicaLight text-current"
      ref={headerRef}
    >
      <ScrollIntoView
        smooth
        selector="#about"
        className="transition cursor-pointer duration-500 hover:scale-110"
      >
        About
      </ScrollIntoView>
      <NavLink
        to="/projects"
        className=" transition cursor-pointer duration-500 hover:scale-110"
      >
        Projects
      </NavLink>
    </header>
  );
};

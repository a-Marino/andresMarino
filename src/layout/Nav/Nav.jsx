import { motion } from "framer-motion";
import ScrollIntoView from "react-scroll-into-view";

export const Nav = () => {
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
      <ScrollIntoView className="hover:text-black transition-colors cursor-pointer duration-500">
        Projects
      </ScrollIntoView>
    </motion.header>
  );
};

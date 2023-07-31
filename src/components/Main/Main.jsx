import "./Main.css";
import { motion } from "framer-motion";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export const Main = () => {
  return (
    <div
      id="main"
      className="h-screen flex md:flex-row flex-col md:gap-0 gap-10 text-white  justify-center md:justify-between landing-section cursor-default select-none"
      data-header-color="white"
    >
      <div className="flex flex-col  justify-center items-center md:items-start px-5 ">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-[10rem] text-6xl kicaBold"
        >
          ANDRES
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:text-[10rem] text-6xl kicaBold Stroke"
        >
          MARINO
        </motion.h2>
        <div>
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="kicaLight text-2xl md:text-5xl green"
          >
            Front End Developer
          </motion.span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="flex md:flex-col justify-center items-center md:mr-5 gap-10"
      >
        <a href="https://github.com/a-Marino" target="_blank" rel="noreferrer">
          <IoLogoGithub size="3em" className="icon transition-colors duration-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/andres-marino-16ab14202/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin size="3em" className="icon transition-colors duration-500" />
        </a>
      </motion.div>
    </div>
  );
};

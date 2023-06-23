import { motion } from "framer-motion";
import "./About.css";

export const About = () => {
  return (
    <div
      id="about"
      className="h-screen w-full flex md:flex-row flex-col justify-between items-center md:py-0 py-20 px-5 font-semibold md:px-10 cursor-default"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="flex flex-col md:w-[45%] space-y-5 md:space-y-10"
      >
        <div id="border" className="border-b-4 w-100">
          <h2 className="text-5xl md:text-7xl yellow pb-3">ABOUT</h2>
        </div>
        <p className="text-xl md:text-2xl font-normal md:w-[85%]">
          I&apos;m Andres Marino, a front-end developer from Argentina. I&apos;m
          passionate about programming, photography, music, and video games.
          Let&apos;s create visually stunning and user-friendly websites
          together. Explore my work and let&apos;s bring your digital vision to
          life!
        </p>
      </motion.div>
    </div>
  );
};

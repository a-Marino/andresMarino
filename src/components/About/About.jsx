import { motion } from "framer-motion";
import "./About.css";

export const About = () => {
  return (
    <div id="about" className="h-screen w-full flex flex-col pt-20 px-10">
      <div className="flex flex-col w-full">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1, delay: 1 }}
          className="yellow text-8xl md:text-[10rem] KCNeueTeeth-Inked md:ml-10"
        >
          ABOUT
        </motion.h2>
        <p className="Spline text-xl md:text-2xl font-light md:p-10">
          I&apos;m Andres Marino, a front-end developer from Argentina.
          Passionate about design, photography, music, and video games.
          Let&apos;s create visually stunning and user-friendly websites
          together. Explore my work and let&apos;s bring your digital vision to
          life!
        </p>
        <div className="flex mt-10 justify-center items-center">
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
            }}
            className="btnDownload flex gap-4 Spline text-xl md:text-2xl"
          >
            Download CV
            <img src="/open.svg" alt="open" className="w-7 self-start" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

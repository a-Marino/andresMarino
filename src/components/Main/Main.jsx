import { motion } from "framer-motion";
import "./Main.css";

export const Main = () => {
  return (
    <div id="main" className="h-screen flex cursor-default">
      <div className="flex flex-col justify-end  text-7xl md:text-[12rem] font-black tracking-tight p-5 md:p-8">
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          ANDRES
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          MARINO
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-3xl md:text-[4rem] tracking-normal red md:px-2"
        >
          FRONT END
          <span className="ml-2 md:ml-5 text-2xl md:text-[3rem] font-normal text-white">
            Developer
          </span>
        </motion.span>
      </div>
    </div>
  );
};

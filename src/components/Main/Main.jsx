import { motion } from "framer-motion";
import "./Main.css";

export const Main = () => {
  return (
    <div id="main" className="h-screen flex cursor-default">
      <div className="flex flex-col justify-end  -space-y-3 text-8xl md:text-[15rem] tracking-wide p-5 md:p-8">
        <div className="flex flex-col -space-y-5 md:-space-y-10">
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="KCNeueTeeth-Inked"
          >
            ANDRES
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="KCNeueTeeth-Inked yellow"
          >
            MARINO
          </motion.span>
        </div>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-3xl md:text-[5rem] tracking-normal red md:px-2 KCNeueTeeth-Inked"
        >
          FRONT END
          <span className="ml-2 md:ml-5 text-2xl md:text-[3rem] font-normal text-white Spline">
            Develope
            <span className="text-black bg-white">r</span>
          </span>
        </motion.span>
      </div>
    </div>
  );
};

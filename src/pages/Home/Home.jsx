import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from 'framer-motion';
import './Home.css';
import { useRef } from 'react';
import {
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  ReactIcon,
  TailwindIcon,
  GitIcon,
  GitHubIcon,
  LinkedinIcon,
} from '../../components/Icons';
import { ProjectsContainer } from '../Projects/ProjectsContainer';

export const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });
  const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 20]);
  const imageX = useTransform(scrollYProgressSpring, [0, 1], [50, 0]);
  const imageXCalc = useMotionTemplate`max(0px, calc(${imageX}% + calc(${imageX}vw - 150px)))`;

  return (
    <main>
      <div ref={ref} className="relative z-10 h-[200vh] overflow-clip">
        <motion.div
          style={{ scale }}
          className="hero-background sticky left-0 top-0 grid h-screen origin-[50%_70%] gap-5 p-4 pt-12 [grid-template-rows:4fr_1fr] md:origin-[90%_40%]"
        >
          <div className="window-mask flex flex-col rounded-3xl bg-white p-8 md:flex-row">
            <div className="flex h-full flex-col items-center md:items-start">
              <h1 className="mb-5 text-4xl font-bold leading-[0.85] md:my-auto md:text-[80px] kicaBold text-center">
                ANDRES MARINO
              </h1>
              <p className="text-lg md:text-3xl font-semibold kicaLight">Front End Developer</p>
            </div>
            <div className="mx-auto -mb-1 mt-4 box-content aspect-[5/8] w-[150px] min-w-[150px] rounded-full border-[4px] border-mainGreen md:my-auto md:-mr-1" />
          </div>
          <div className="text-white flex justify-between items-center px-2 md:-px-10">
            <div className="flex gap-5 flex-wrap">
              <HTMLIcon />
              <CSSIcon />
              <JavaScriptIcon />
              <ReactIcon />
              <TailwindIcon />
              <GitIcon />
            </div>
            <div className="flex gap-5 flex-wrap">
              <a href="https://github.com/a-Marino" target="_blank" rel="noreferrer">
                <GitHubIcon className="hover:fill-mainGreen fill-white transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/andres-marino-16ab14202/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon className="hover:fill-mainGreen fill-white transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-[-200vh] h-[200vh] overflow-clip bg-black pb-20">
        <motion.div
          style={{ x: imageXCalc }}
          className="sticky top-1/4 mx-auto flex items-center p-10  w-[900px] max-w-[90%] rounded-2xl bg-white shadow-2xl md:top-20 md:text-3xl kicaRegular"
        >
          <p>
            I&apos;m <span className="green">Andres Marino</span>, a front-end developer from
            Argentina. <br />
            Passionate about design, photography, music, and video games. Let&apos;s create visually
            stunning and user-friendly websites together. Explore my work and let&apos;s bring your
            digital vision to life!
          </p>
        </motion.div>
      </div>
      <div className="space-y-[80px] bg-black md:text-xl text-white">
        <h2 className="md:text-5xl text-3xl text-center kicaBold">PROJECTS</h2>
        <div className="flex flex-col items-center  justify-center">
          <ProjectsContainer />
        </div>
      </div>
    </main>
  );
};

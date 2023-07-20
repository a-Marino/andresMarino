import "./About.css";

export const About = () => {
  return (
    <div
      id="about"
      className="h-screen bg-white landing-section flex md:flex-row flex-col justify-around items-center md:px-5 md:gap-10 md:py-0 py-10"
      style={{ backgroundColor: "#00ff7f" }}
      data-header-color="black"
    >
      <div className="flex flex-col bg-black p-2 rounded-md text-white kicaLight md:w-[50%] w-[90%] border-2 border-black md:h-[60%] md:gap-5 gap-2 relative">
        <h1 className="md:text-3xl text-xl kicaBold">About</h1>
        <p className="md:text-2xl md:pr-10">
          I&apos;m <span className="green">Andres Marino</span>, a front-end developer from
          Argentina. Passionate about design, photography, music, and video games. Let&apos;s create
          visually stunning and user-friendly websites together. Explore my work and let&apos;s
          bring your digital vision to life!
        </p>
        <a
          href="https://docdro.id/g6jcXbL"
          target="blank"
          className="btnDownload absolute md:-bottom-5 -bottom-7 md:-right-8 -right-3 bg-white text-black kicaRegular px-5 py-2 rounded-full border border-black  md:-rotate-12 md:hover:scale-110 transition duration-500"
        >
          Download CV
        </a>
      </div>
      <div className="flex flex-col md:w-[50%]  w-[90%]  md:h-[60%] border-2 rounded-md p-2 border-black kicaLight bg-white md:gap-5 gap-2">
        <span className="md:text-3xl text-xl kicaBold">Skills</span>
        <ul className="md:space-y-3 space-y-1 md:text-xl">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJs</li>
          <li>VueJs</li>
          <li>TailwindCSS</li>
          <li>SQL</li>
          <li>Figma</li>
        </ul>
      </div>
    </div>
  );
};

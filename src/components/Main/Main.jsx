import "./Main.css";

export const Main = () => {
  return (
    <div
      id="main"
      className="h-screen flex flex-col text-white justify-center md:items-start items-center landing-section"
      data-header-color="white"
    >
      <div>
        <h1 className="md:text-[10rem] text-6xl kicaBold">ANDRES</h1>
        <h2 className="md:text-[10rem] text-6xl kicaBold Stroke">MARINO</h2>
      </div>
      <span className="kicaLight text-2xl md:text-5xl">
        Front End Developer
      </span>
    </div>
  );
};

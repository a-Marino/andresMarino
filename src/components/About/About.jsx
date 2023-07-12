import "./About.css";

export const About = () => {
  return (
    <div
      id="about"
      className="h-screen bg-white landing-section flex md:flex-row flex-col justify-around items-center md:px-5 md:gap-10 md:py-0 py-10"
      data-header-color="black"
    >
      <div className="flex flex-col bg-black p-2 rounded-md text-white kicaLight md:w-[50%] w-[80%] border-2 border-black md:h-[60%] h-[40%]">
        <h1 className="text-3xl">About</h1>
        <p>{/* TODO */}</p>
      </div>
      <div className="flex flex-col md:w-[50%]  w-[80%]  md:h-[60%] border-2 rounded-md p-2 border-black kicaLight h-[40%]">
        <span className="text-3xl">Skills</span>
        {/* TODO LIST */}
      </div>
    </div>
  );
};

//  INSPO https://www.behance.net/gallery/170477261/Kica-Display-Font

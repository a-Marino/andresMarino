import { Main } from "../../components/Main/Main";
import { About } from "../../components/About/About";

export const Index = () => {
  return (
    <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto">
      <img
        src="https://res.cloudinary.com/dv8nczwtj/image/upload/v1687551579/Google/bgGradient.jpg"
        className="absolute z-[-1] h-[200%] md:h-100"
      />
      <div id="main" className="snap-center z-[1]">
        <Main />
      </div>
      <div id="about" className="snap-center z-[1]">
        <About />
      </div>
    </main>
  );
};

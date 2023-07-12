import { Main } from "../../components/Main/Main";
import { About } from "../../components/About/About";

export const Index = () => {
  return (
    <main className="w-full h-screen overflow-auto">
      <Main />
      <About />
    </main>
  );
};

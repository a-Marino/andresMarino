import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../ProjectMock";

export const Projects = () => {
  return (
    <div className="min-h-screen w-full text-white py-20 md:px-10 px-5">
      <h1 className="md:text-6xl text-4xl kicaRegular">Projects</h1>
      <div className="flex flex-col md:flex-row flex-wrap mt-10 gap-5">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              deploy={project.deploy}
              chips={project.chips}
              img={project.img}
              github={project.github}
            />
          );
        })}
      </div>
    </div>
  );
};

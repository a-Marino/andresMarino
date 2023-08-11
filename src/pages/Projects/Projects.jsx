import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../ProjectMock';

export const Projects = () => {
  return (
    <div className="w-full text-white md:px-10 px-5 py-5">
      <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center">
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

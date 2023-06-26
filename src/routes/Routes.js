import { IndexCointainer } from "../pages/Index/IndexCointainer";
import { ProjectsContainer } from "../pages/Projects/ProjectsContainer";

export const routes = [
  {
    id: 1,
    path: "/",
    Element: IndexCointainer,
  },
  {
    id: 2,
    path: "/projects",
    Element: ProjectsContainer,
  },
];

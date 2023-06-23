import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { routes } from "./routers";
import { AuthCheck } from "./components/AuthCheck";

function App() {
  return (
    <Routes>
      {routes.public.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
      <Route element={<AuthCheck />}>
        {routes.private.map((route) => (
          <Route key={route.id} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((item) => (
                <Route key={item.id} path={item.path} element={item.element} />
              ))}
          </Route>
        ))}
      </Route>
    </Routes>
  );
}

export default App;

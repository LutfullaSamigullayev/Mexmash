import { Routes, Route } from "react-router-dom"
import { routes } from "./routers"


function App() {

  return (
    <Routes>
      {routes.public.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
        {routes.private.map((route) => (
            <Route key={route.id} path={route.path} element={route.element}>
              {route.children &&
                route.children.map((item) => (
                    <Route
                      key={item.id}
                      path={item.path}
                      element={item.element}
                    />
                ))}
            </Route>
        ))}
    </Routes>
  )
}

export default App

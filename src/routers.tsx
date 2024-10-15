import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Products } from "./pages/Products";
import { Users } from "./pages/Users";

interface TRoute {
  id: number;
  path: string;
  element: React.ReactNode;
  children?: TRoute[];
}

interface TRoutes {
  public: TRoute[];
  private: TRoute[];
}

export const routes: TRoutes = {
  public:  [{ id:1, path: "login", element: <Login /> }],
  private: [
    {
      id: 1,
      path: "/",
      element: <Home />,
      children: [
        {
          id: 2,
          path: "/",
          element: <Main />,
        },
        {
          id: 3,
          path: "/users",
          element: <Users />,
        },
        {
          id: 4,
          path: "/products",
          element: <Products />,
        },
        {
          id: 5,
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ],
}

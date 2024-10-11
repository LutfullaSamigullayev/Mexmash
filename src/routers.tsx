import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { Products } from "./pages/Products";
import { Users } from "./pages/Users";

export const routers = {
  public: [{ path: "login", element: <Login /> }],
  private: [
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ],
};

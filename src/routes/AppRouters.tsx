import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/Home";
import AboutUs from "@pages/AboutUs";
import Categories from "@pages/Categories";
import Products from "@pages/Products";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Register from "@pages/Register";
import Login from "@pages/Login";
import Error from "@pages/Error";
import Cart from "@pages/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Categories",
        element: <Categories />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/.test(params.prefix)
          ) {
            throw new Response("Bad Request", { status: 400 });
          }
          return true;
        },
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const AppRouters = () => {
  return <RouterProvider router={router} />;
};
export default AppRouters;

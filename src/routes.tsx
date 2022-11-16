import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer } from "./components/layout";
import { loader as authLoader } from "./components/layout/main-container";

const Signin = lazy(() => import("src/pages/signin"));
const RocketIndex = lazy(() => import("src/pages/equipment/rocket"));
const ShipIndex = lazy(() => import("src/pages/equipment/ship"));
const Error = lazy(() => import("src/components/common/error"));

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/",
      loader: authLoader,
      element: <MainContainer />,
      children: [
        {
          path: "equipment",
          children: [
            {
              path: "rocket",
              children: [{ index: true, element: <RocketIndex /> }],
            },
            {
              path: "ship",
              children: [{ index: true, element: <ShipIndex /> }],
            },
          ],
        },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;

import { lazy } from "react";
import { createBrowserRouter, useRoutes } from "react-router-dom";

const Signin = lazy(() => import("src/pages/signin"));
const Test = lazy(() => import("src/pages/index"));

const Routes = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/",
        element: <Test />,
      },
    ],
    { basename: "/" }
  );
  //   const element = useRoutes([
  //     {
  //       path: "/signin",
  //       element: <Signin />,
  //     },
  //     {
  //       path: "/",
  //       element: <Test />,
  //     },
  //   ]);

  return router;
};
export default Routes;

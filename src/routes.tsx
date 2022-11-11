import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Signin = lazy(() => import("src/pages/signin"));
const Test = lazy(() => import("src/pages/index"));

const Routes = () => {
  const element = useRoutes([
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/",
      element: <Test />,
    },
  ]);

  return element;
};
export default Routes;

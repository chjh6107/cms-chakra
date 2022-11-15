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
      element: (
        // 토큰을 가지고 있고 디코딩 한 토큰에 adminId 값이 있다면 메인컨테이너 아니면 로그인 페이지
        <MainContainer />
      ),
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

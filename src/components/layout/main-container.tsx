import { Spinner } from "@chakra-ui/react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Suspense, useEffect } from "react";
import {
  LoaderFunction,
  Outlet,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { VARIABLES } from "src/common/variables";
import Header from "./header";
import SideNav, { mainRoute } from "./side-nav";

export const loader: LoaderFunction = () => {
  const token = Cookies.get(VARIABLES.ACCESS_TOKEN);
  // adminId를 가지고있는 토큰이 아니면 로그인페이지로 이동
  if (!(token && jwtDecode<Record<string, unknown>>(token).adminId)) {
    return redirect("/signin");
  }
};

const MainContainer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      navigate(mainRoute);
    } else if (pathname !== "/" && pathname.slice(-1) === "/") {
      navigate(pathname.replace(/\/+$/, ""), { replace: true });
    }
  }, []);

  return (
    <div className={`min-w-[1600px] flex min-h-screen bg-bg-second`}>
      {/* side-nav */}
      <div className={`flex-1`}>
        <SideNav />
      </div>
      <div className={`w-full`}>
        {/* header */}
        <Header />
        {/* page components */}
        <Suspense
          fallback={
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              //   color="blue.500"
              colorScheme={"primary"}
              size="xl"
            />
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MainContainer;

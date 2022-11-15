import { Spinner } from "@chakra-ui/react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Suspense } from "react";
import { LoaderFunction, Outlet, redirect } from "react-router-dom";
import { VARIABLES } from "src/common/variables";
import Header from "./header";
import SideNav from "./side-nav";

export const loader: LoaderFunction = () => {
  const token = Cookies.get(VARIABLES.ACCESS_TOKEN);
  if (!(token && jwtDecode<Record<string, unknown>>(token).adminId)) {
    redirect("/signin");
  }
};

const MainContainer = () => {
  return (
    <div className={`min-w-[1600px] min-h-screen bg-bg-second`}>
      {/* side-nav */}
      <SideNav />
      <div>
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

import { ChakraProvider } from "@chakra-ui/react";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "src/styles/globals.css";

const Signin = lazy(() => import("src/pages/signin"));
const IndexPage = lazy(() => import("src/pages/index"));

const router = createBrowserRouter(
  [
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/",
      element: <IndexPage />,
    },
  ],
  { basename: "/" }
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ChakraProvider>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </ChakraProvider>
  </StrictMode>
);

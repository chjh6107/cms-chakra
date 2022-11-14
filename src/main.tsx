import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import jwtDecode from "jwt-decode";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "src/styles/globals.css";

const Signin = lazy(() => import("src/pages/signin"));
const IndexPage = lazy(() => import("src/pages/index"));

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoxLCJpYXQiOjE2NjgzOTExMzAsImV4cCI6MTY2ODk5NTkzMH0.5mu-CxGNylv9wTBc0EJugbvArfRLTSwdeqqjx3d2yWg";
const decoded = jwtDecode(token);
console.log(decoded);

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
      <CSSReset />
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </ChakraProvider>
  </StrictMode>
);

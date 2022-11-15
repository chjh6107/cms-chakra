import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";

import "src/styles/globals.css";
import theme from "./common/theme";
import Routes from "./routes";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Suspense>
        <Routes />
      </Suspense>
    </ChakraProvider>
  </StrictMode>
);

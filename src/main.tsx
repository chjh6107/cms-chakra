import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";

import "src/styles/globals.css";
import theme from "./common/theme";
import Routes from "./routes";

const client = new ApolloClient({
  uri: import.meta.env.VITE_END_POINT,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Suspense>
          <Routes />
        </Suspense>
      </ChakraProvider>
    </ApolloProvider>
  </StrictMode>
);

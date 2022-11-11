import { useState } from "react";
import Button from "@components/button";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <div className={`text-[50px] bg-red-500`}>Testasdf</div>
      <Button />
    </ChakraProvider>
  );
}

export default App;

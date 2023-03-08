import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <ChakraProvider resetCSS>
        <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;

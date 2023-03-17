import { ChakraProvider } from "@chakra-ui/react";
import { GlobalContextProvider } from "./context/GlobalContext";
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <ChakraProvider resetCSS>
          <Router />
        </ChakraProvider>
      </GlobalContextProvider>
    </div>
  );
}

export default App;

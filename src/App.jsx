import { ChakraProvider } from "@chakra-ui/react";
import Payment from "./components/transactionConfirmationUI/Payment";



function App() {
  return (
    <ChakraProvider>
      <Payment />
    </ChakraProvider>
  );
}

export default App;
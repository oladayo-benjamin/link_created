import { ChakraProvider } from "@chakra-ui/react";
import CreatePaymentLink from "./components/transactionConfirmationUI/CreatePaymentLink";
import PaymentType from "./components/transactionConfirmationUI/PaymentType";
import Payment from "./components/transactionConfirmationUI/Payment";



function App() {
  return (
    <ChakraProvider>
      <Payment />
      <PaymentType />
      <CreatePaymentLink />
    </ChakraProvider>
  );
}

export default App;
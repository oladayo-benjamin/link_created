import { ChakraProvider } from "@chakra-ui/react";
import Payment from "./components/transactionConfirmationUI/Payment";
import PaymentSuccessMessage from "./components/transactionConfirmationUI/PaymentSuccessMessage";
import PaymentLinkPage from "./components/transactionConfirmationUI/PaymentLinkPage";
import MakePaymentPage from "./components/transactionConfirmationUI/makePaymentPage";


function App() {
  return (
    <ChakraProvider>
      <Payment />
      <PaymentSuccessMessage />
      <PaymentLinkPage />
      <MakePaymentPage />
    </ChakraProvider>
  );
}

export default App;

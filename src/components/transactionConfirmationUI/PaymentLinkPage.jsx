import React from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Check, Copy } from "lucide-react";

import Email from "./paymentLinkAssets/email.png";
import WhatsApp from "./paymentLinkAssets/whatsapp.png";
import Chat from "./paymentLinkAssets/sms.png";
import CheckIcon from "./paymentLinkAssets/check.png";

const PaymentLinkPage = () => {
  const [copied, setCopied] = React.useState(false);
  const paymentLink = "https://payment.link/xyz123";

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const paddingValue = useBreakpointValue({ base: 4, md: 8 }); // Adjust padding for mobile/tablet

  return (
    <Box w="100vw" minH="100vh" bg="gray.50">
      <Flex justify="center" align="center" h="full" py={8}>
        <VStack
          bg="gray.100"
          p={paddingValue}
          borderRadius="md"
          spacing={6}
          align="center"
          w={{ base: "90%", md: "400px" }}
          maxW="md"
          mx="auto"
        >
          {/* Success Icon */}
          <Image src={CheckIcon} alt="check" boxSize="50px" />

          {/* Success Message */}
          <Text fontSize={{ base: "sm", md: "md" }} fontWeight="500" color="gray.700">
            Payment link generated!
          </Text>

          {/* Payment Link */}
          <InputGroup size="md" flexDirection={{ base: "column", md: "row" }} gap={{ base: 2, md: 0 }}>
            <Input
              pr="4.5rem"
              py="1.25rem"
              value={paymentLink}
              readOnly
              bg="gray.100"
              borderColor="yellow.300"
              color="gray.700"
              rounded="md"
              w="full"
            />
            <Button
              h="2.5rem"
              onClick={handleCopy}
              leftIcon={copied ? <Check size={16} /> : <Copy size={16} />}
              fontSize="sm"
              bg="gray.100"
              _hover={{ bg: "green.500", color: "white" }}
              px="4"
              border="1px solid black"
              color="gray.700"
              rounded="md"
              w={{ base: "full", md: "auto" }}
            >
              {copied ? "Copied" : "Copy Link"}
            </Button>
          </InputGroup>

          {/* Share Options */}
          <VStack spacing={2} w="full">
            <Text fontSize="sm" color="gray.600">
              Share this link via:
            </Text>
            <HStack spacing={4} justify="center">
              <Image src={Email} alt="Email" boxSize="24px" />
              <Image src={WhatsApp} alt="WhatsApp" boxSize="24px" />
              <Image src={Chat} alt="Chat" boxSize="24px" />
            </HStack>
          </VStack>

          {/* Action Buttons */}
          <VStack spacing={2} w="full">
            <Button w="full" bg="#2E5C38" color="white" _hover={{ bg: "#244a2d" }}>
              Back To Payment Links
            </Button>
            <Button w="full" variant="outline" color="gray.600" borderColor="gray.300">
              View QR Code
            </Button>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default PaymentLinkPage;

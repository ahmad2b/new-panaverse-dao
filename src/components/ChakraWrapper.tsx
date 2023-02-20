"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { ChakraWrapperProps } from "@/types/ChakraProps";

export default function ChakraWrapper({ children }: ChakraWrapperProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

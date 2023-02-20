"use client";
import { Box, Container } from "@chakra-ui/react";

type SectionWrapperProps = {
  children: React.ReactNode;
};

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <Box bg={"black"}>
      <Container maxW={"6xl"} textColor={"white"}>
        {children}
      </Container>
    </Box>
  );
}

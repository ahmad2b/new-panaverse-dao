"use client";

import { Flex, Heading } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export default function FullScreen({ children }: Props) {
  return (
    <Flex
      direction="column"
      flex="1"
      justify="center"
      align="center"
      bg="gray.200"
      p="4"
    >
      <Heading>{children}</Heading>
    </Flex>
  );
}

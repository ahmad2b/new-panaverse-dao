"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Heading1Size,
  Heading2Size,
  xPadding,
  TextBasicSize,
} from "@/utils/Sizing";

export default function Ending() {
  return (
    <Box
      maxW={"full"}
      color={"white"}
      bg={"black"}
      px={xPadding}
      pt={4}
      pb={24}
    >
      <>
        <Stack
          border={"8px"}
          borderColor={"red.900"}
          borderRadius={"3xl"}
          spacing={8}
          p={8}
          alignItems={"center"}
          justify={"space-between"}
        >
          <Flex
            justifyContent={"space-around"}
            alignItems={"center"}
            w={"full"}
          >
            <Box maxW={"2xl"}>
              <Heading fontSize={Heading2Size}>
                Certified Web 3.0 and Metaverse Developer
              </Heading>
              <Text fontSize={TextBasicSize} py={2}>
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies
              </Text>
            </Box>
            <Box display={{ base: "none", md: "flex" }}>
              <Image
                src={"/join.png"}
                alt={"Join Now"}
                width={300}
                height={300}
              ></Image>
            </Box>
          </Flex>
          <Flex
            border={"4px"}
            borderColor={"red.900"}
            borderRadius={"3xl"}
            alignItems={"center"}
            justify={"space-between"}
            // px={12}
            w={"xl"}
            display={{ base: "none", sm: "flex", md: "flex", lg: "flex" }}
          >
            <Text pl={12}>Get Ready For The Future!</Text>

            <Link as={NextLink} href={"/apply"}>
              <Button
                px={8}
                variant={"outline"}
                borderColor={"red"}
                textColor={"white"}
                borderRadius={"3xl"}
                colorScheme={"red"}
              >
                Start Learning Today
              </Button>
            </Link>
          </Flex>
        </Stack>
      </>
    </Box>
  );
}

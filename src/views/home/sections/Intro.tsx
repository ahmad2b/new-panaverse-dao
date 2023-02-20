"use client";
import {
  Stack,
  VStack,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import {
  Heading1Size,
  Heading2Size,
  xPadding,
  TextBasicSize,
} from "@/utils/Sizing";

export default function Intro() {
  return (
    <Box
      maxW={"full"}
      color={"white"}
      bg={"black"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        px={xPadding}
        w={"75%"}
        pt={4}
        pb={12}
        alignItems={"center"}
        justify={"space-between"}
        wrap={"wrap"}
        direction={{ base: "column-reverse", md: "column", lg: "row" }}
      >
        <VStack
          alignItems={{ base: "center", md: "center", lg: "flex-start" }}
          spacing={8}
          textAlign={{ base: "center", md: "center", lg: "left" }}
        >
          <Heading fontSize={Heading1Size}>
            Become Certified <br /> Web 3.0 & Metaverse <br /> Developer
          </Heading>

          <Text fontSize={TextBasicSize}>
            A One and Quater Years Earn as you Learn Program
          </Text>

          <Stack direction={{ base: "column", md: "row", lg: "row" }}>
            <Link as={NextLink} href={"/apply"}>
              <Button
                px={8}
                rounded={"3xl"}
                colorScheme={"red"}
                variant={"solid"}
              >
                Start Learning Now
              </Button>
            </Link>

            <Link as={NextLink} href={"/curriculm"}>
              <Button
                px={8}
                rounded={"3xl"}
                variant={"outline"}
                colorScheme={"White"}
                borderColor={"Red"}
              >
                Explore Curriculum
              </Button>
            </Link>
          </Stack>
        </VStack>

        <Image
          src={"/emoteLaptop.png"}
          width={350}
          height={350}
          alt="Panaverse Logo"
        />
      </Flex>
    </Box>
  );
}

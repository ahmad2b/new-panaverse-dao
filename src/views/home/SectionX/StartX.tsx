"use client";
import {
  Stack,
  VStack,
  Box,
  Heading,
  Text,
  Button,
  Link,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

export default function StartX() {
  return (
    <Box bg={"black"}>
      <Container maxW={"6xl"} textColor={"white"}>
        <Stack
          as={Box}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          direction={{ base: "column-reverse", sm: "column", md: "row" }}
        >
          <Stack
            as={VStack}
            spacing={8}
            alignItems={{ base: "center", sm: "flex-start", md: "flex-start" }}
            textAlign={{ base: "center", sm: "left", md: "left" }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Become Certified <br />
              <Text as={"span"} color={"red.500"}>
                Web 3.0 & Metaverse
              </Text>
              <br /> Developer
            </Heading>

            <Text fontSize={"lg"} color={"whiteAlpha.900"}>
              A One and Quater Years Earn as you Learn Program
            </Text>

            <Stack direction={{ base: "column", sm: "row", md: "row" }}>
              <Link as={NextLink} href={"/apply"}>
                <Button
                  colorScheme={"red"}
                  variant={"solid"}
                  rounded={"full"}
                  px={8}
                  size={"lg"}
                >
                  Start Learning Now
                </Button>
              </Link>

              <Link as={NextLink} href={"/curriculm"}>
                <Button
                  colorScheme={"white"}
                  variant={"outline"}
                  rounded={"full"}
                  px={8}
                  borderColor={"Red"}
                  size={"lg"}
                >
                  Explore Curriculum
                </Button>
              </Link>
            </Stack>
          </Stack>

          <Image
            src={"/emoteLaptop.png"}
            width={350}
            height={350}
            alt="Panaverse Logo"
          />
        </Stack>
      </Container>
    </Box>
  );
}

"use client";
import { Box, Flex, Stack, Heading, Image, Text, Icon } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import QuaterCard from "@/components/QuaterCard";
import {
  Heading1Size,
  Heading2Size,
  xPadding,
  TextBasicSize,
} from "@/utils/Sizing";

export default function LaunchCarrer() {
  return (
    <Box maxW={"full"} color={"white"} bg={"black"}>
      <Flex
        px={xPadding}
        pt={8}
        pb={8}
        alignItems={"center"}
        wrap={"wrap"}
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <Stack
          direction={{ base: "column", md: "row", lg: "row" }}
          alignItems={{ base: "flex-start", sm: "center", lg: "center" }}
          textAlign={{ base: "left", sm: "center", md: "left", lg: "left" }}
          justifyContent={"space-between"}
          w={"full"}
        >
          <Box>
            <Heading
              fontSize={Heading2Size}
              fontWeight={"bold"}
              textTransform={"uppercase"}
            >
              Launch Your Career In As
            </Heading>
            <Heading
              fontSize={Heading2Size}
              fontWeight={"normal"}
              textTransform={"uppercase"}
            >
              Little As 6 Months.
            </Heading>
          </Box>
          <Image
            display={{ base: "none", md: "none", lg: "flex" }}
            src={"/arrow right.png"}
            width={250}
            height={250}
            alt={"arrow right"}
          />
          <Box
            display={{ base: "flex", md: "flex", lg: "none" }}
            alignItems={"flex-end"}
          >
            <Icon as={TriangleDownIcon} w={6} h={6} />
          </Box>

          <Text fontSize={TextBasicSize} maxW={"xl"}>
            Every participant will start by completing following 3 core courses:
          </Text>
        </Stack>

        <Stack
          direction={{ base: "column", md: "row", lg: "row" }}
          alignItems={{
            base: "flex-start",
            sm: "center",
            lg: "center",
          }}
          justifyContent={"space-between"}
          w={"full"}
        >
          <QuaterCard
            name={"Q1"}
            description={
              "CS-101:  Object Oriented Programming using TypeScript"
            }
          />

          <QuaterCard
            name={"Q2"}
            description={"W2-201: Developing Planet-Scale Web 2.0 Applications"}
          />

          <QuaterCard
            name={"Q3"}
            description={"$-101: Dollar Making Bootcamp"}
          />
        </Stack>
      </Flex>
    </Box>
  );
}

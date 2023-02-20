"use client";
import {
  Box,
  Stack,
  Heading,
  Image,
  Text,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { TriangleDownIcon, ArrowRightIcon } from "@chakra-ui/icons";
import QuaterCard from "@/components/QuaterCard";
import SectionWrapper from "@/components/SectionWrapper";

export default function LaunchCarrerX() {
  return (
    <SectionWrapper>
      <Stack
        as={Box}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
        direction={{ base: "column", sm: "row", md: "row" }}
        textAlign={{ base: "center", sm: "left", md: "left" }}
      >
        <Box>
          <Heading
            as={"h2"}
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
          >
            Launch Your Career In As
          </Heading>
          <Heading
            as={"h2"}
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            Little As 6 Months.
          </Heading>
        </Box>
        <Image
          display={{ base: "none", sm: "none", md: "flex" }}
          src={"/arrow right.png"}
          width={200}
          height={200}
          alt={"arrow right"}
        />
        <Box
          display={{ base: "flex", sm: "none", md: "none" }}
          alignItems={"flex-end"}
        >
          <Icon as={TriangleDownIcon} w={6} h={6} />
        </Box>
        <Box
          display={{ base: "none", sm: "flex", md: "none" }}
          alignItems={"flex-end"}
        >
          <Icon as={ArrowRightIcon} w={6} h={6} />
        </Box>

        <Text fontSize={"lg"} maxW={"2xl"}>
          Every participant will start by completing following 3 core courses:
        </Text>
      </Stack>

      <SimpleGrid
        columns={{ base: 1, sm: 3 }}
        spacing={10}
        alignItems={"flex-start"}
      >
        <QuaterCard
          name={"Q1"}
          description={"CS-101:  Object Oriented Programming using TypeScript"}
        />

        <QuaterCard
          name={"Q2"}
          description={"W2-201: Developing Planet-Scale Web 2.0 Applications"}
        />

        <QuaterCard name={"Q3"} description={"$-101: Dollar Making Bootcamp"} />
      </SimpleGrid>
    </SectionWrapper>
  );
}

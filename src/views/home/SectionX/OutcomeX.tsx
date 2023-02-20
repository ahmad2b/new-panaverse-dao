"use client";
import { Box, Stack, Heading, Image, Text, Icon } from "@chakra-ui/react";
import { TriangleDownIcon, ArrowRightIcon } from "@chakra-ui/icons";
import SectionWrapper from "@/components/SectionWrapper";

export default function OutcomeX() {
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
            Outcome for
          </Heading>
          <Heading
            as={"h2"}
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
            fontWeight={"normal"}
            textTransform={"uppercase"}
          >
            Participants
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
          Graduates of this program will own products (Full-Stack App Templates,
          AR and VR Experiences, and APIs) marketed globally by the Panaverse
          DAO. They can also start offering services at $50 per hour ($96,000
          per year).
        </Text>
      </Stack>
    </SectionWrapper>
  );
}

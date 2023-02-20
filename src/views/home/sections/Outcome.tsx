"use client";
import { Box, Flex, Stack, Heading, Image, Text, Icon } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Heading1Size,
  Heading2Size,
  xPadding,
  TextBasicSize,
} from "@/utils/Sizing";

export default function Outcome() {
  return (
    <Box maxW={"full"} color={"white"} bg={"black"}>
      <Flex
        px={xPadding}
        pt={8}
        pb={8}
        alignItems={"center"}
        wrap={"wrap"}
        direction={{ base: "column-reverse", md: "column", lg: "row" }}
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
              as={"h2"}
              fontSize={Heading2Size}
              fontWeight={"bold"}
              textTransform={"uppercase"}
            >
              Outcome for
            </Heading>
            <Heading
              as={"h2"}
              fontSize={Heading2Size}
              fontWeight={"normal"}
              textTransform={"uppercase"}
            >
              Participants
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

          <Text fontSize={TextBasicSize} maxW={"2xl"}>
            Graduates of this program will own products (Full-Stack App
            Templates, AR and VR Experiences, and APIs) marketed globally by the
            Panaverse DAO. They can also start offering services at $50 per hour
            ($96,000 per year).
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

"use client";
import {
  Accordion,
  Box,
  Stack,
  Heading,
  Text,
  Flex,
  Link,
  Button,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Enrollment from "../../../../public/enrollSpecial.png";
import { ACCORD_ITEMS } from "@/utils/Accordion";
import {
  Heading1Size,
  Heading2Size,
  xPadding,
  TextBasicSize,
} from "@/utils/Sizing";

export default function EnrollCourses() {
  return (
    <Box maxW={"full"} color={"white"} bg={"black"} py={50}>
      <Stack
        padding={xPadding}
        py={8}
        alignItems={"center"}
        justifyContent={"center"}
        wrap={"wrap"}
        direction={"column"}
        textAlign={"center"}
        spacing={12}
      >
        <Box>
          <Heading fontSize={Heading2Size} mb={4}>
            Enroll in Special Tracks.
          </Heading>
          <Text fontSize={TextBasicSize}>
            After completing first two quaters participants will choose one or
            more specializations consisting 2 courses of each:
          </Text>
        </Box>
        <Flex
          w={"full"}
          alignItems={"center"}
          justifyContent={"space-between"}
          wrap={"wrap"}
          direction={{ base: "column-reverse", md: "column", lg: "row" }}
        >
          <Box
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
            justifyContent={"center"}
            p={8}
          >
            <Image
              src={Enrollment}
              alt={"Enroll Courses"}
              width={400}
              height={400}
            />
          </Box>
          <Stack direction={"column"}>
            <Accordion allowToggle>
              {ACCORD_ITEMS.map((item) => (
                <AccordionItem w={"md"} key={item.title}>
                  <h2>
                    <AccordionButton _expanded={{ bg: "grey", color: "white" }}>
                      <Box as="span" flex="1" textAlign="left">
                        {item.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel w={"md"} textAlign="left">
                    {item.content}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Stack>
        </Flex>
        <Box>
          <Link as={NextLink} href="/curriculm">
            <Button px={8} rounded={"3xl"} colorScheme={"red"}>
              Explore Full Curriculum
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}

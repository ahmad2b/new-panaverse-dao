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
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import Enrollment from "../../../../public/enrollSpecial.png";
import { ACCORD_ITEMS } from "@/utils/Accordion";
import SectionWrapper from "@/components/SectionWrapper";

export default function EnrollCoursesX() {
  return (
    <SectionWrapper>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Box>
          <Heading
            as={"h2"}
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
            fontWeight={"bold"}
            textTransform={"capitalize"}
            textAlign={"center"}
            mb={8}
          >
            Enroll in Special Tracks.
          </Heading>
          <Text textAlign={"center"} fontSize={"lg"}>
            After completing first two quaters participants will choose one or
            more specializations consisting 2 courses of each:
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex display={{ base: "none", md: "flex" }}>
            <Image
              src={Enrollment}
              alt={"Enroll Courses"}
              width={400}
              height={400}
            />
          </Flex>

          <Stack spacing={4}>
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
        </SimpleGrid>

        <Link as={NextLink} href="/curriculm">
          <Button px={14} rounded={"full"} colorScheme={"red"} size={"lg"}>
            Explore Full Curriculum
          </Button>
        </Link>
      </Stack>
    </SectionWrapper>
  );
}

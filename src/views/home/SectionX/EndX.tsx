"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  Stack,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

export default function EndX() {
  return (
    <SectionWrapper>
      <Stack
        border={"8px"}
        borderColor={"red.800"}
        borderRadius={"3xl"}
        direction={"column"}
        py={{ base: 14, md: 14 }}
        px={{ base: 8, md: 8 }}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={{ base: 8, md: 14 }}
        bg="rgba(255, 255, 255, 0.1)"
      >
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={10}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <GridItem colSpan={{ base: 3, md: 2 }} order={{ base: 2, md: 1 }}>
            <Stack
              spacing={4}
              align={{ base: "center", sm: "center", md: "flex-start" }}
            >
              <Heading
                as={"h2"}
                fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
              >
                Certified Web 3.0 and Metaverse Developer
              </Heading>
              <Text fontSize={"lg"}>
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies
              </Text>
            </Stack>
          </GridItem>

          <GridItem
            order={{ base: 1, md: 2 }}
            colSpan={{ base: 3, md: 1 }}
            display={{ base: "none", sm: "block", md: "block" }}
          >
            <Flex
              justifyContent={{ base: "center", sm: "center", md: "flex-end" }}
            >
              <Box display={{ base: "none", md: "flex" }}>
                <Image
                  src={"/join.png"}
                  alt={"Join Now"}
                  width={300}
                  height={300}
                ></Image>
              </Box>
            </Flex>
          </GridItem>
        </SimpleGrid>

        <Flex
          border={"4px"}
          borderColor={"red.900"}
          borderRadius={"full"}
          alignItems={"center"}
          justify={"space-between"}
          w={"xl"}
          display={{ base: "none", sm: "flex", md: "flex" }}
        >
          <Text fontSize={"lg"} pl={12}>
            Get Ready For The Future!
          </Text>

          <Link as={NextLink} href={"/apply"}>
            <Button
              px={8}
              borderColor={"red"}
              textColor={"white"}
              borderRadius={"3xl"}
              colorScheme={"red"}
              variant={"outline"}
            >
              Start Learning Today
            </Button>
          </Link>
        </Flex>
      </Stack>
    </SectionWrapper>
  );
}

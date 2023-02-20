"use client";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  Button,
  Circle,
  Image,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import NextLink from "next/link";

import SectionWrapper from "@/components/SectionWrapper";

export default function ProgramNutshellX() {
  return (
    <SectionWrapper>
      <Stack spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
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
                Program in Nutshell Earn While You Learn.
              </Heading>
              <Text fontSize={"lg"}>
                In this brand-new type of curriculum, students will learn how to
                make money and boost exports in the classroom and will begin
                doing so within six months of the program beginning. It
                resembles a cross between a corporate venture and an educational
                project.
              </Text>
              <Link as={NextLink} href={"/apply"}>
                <Button
                  colorScheme={"red"}
                  // textColor={"white"}
                  border={"2px"}
                  // bgColor="rgba (255, 255, 255, 0.1)"
                  borderColor={"red"}
                  variant={"outline"}
                  size={"lg"}
                  px={20}
                  rounded={"full"}
                >
                  Apply Now
                </Button>
              </Link>
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
              <Circle
                bg="gray.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                my={4}
                maxWidth="300px"
              >
                <Image
                  objectFit="cover"
                  borderRadius="full"
                  src={"/astroOnRocket.png"}
                  alt={"Astronot on Rocket"}
                />
              </Circle>
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Stack>
    </SectionWrapper>
  );
}

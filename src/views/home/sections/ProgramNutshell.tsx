"use client";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  Button,
  useBreakpointValue,
  Circle,
  Image,
} from "@chakra-ui/react";
// import Image from "next/image";
import NextLink from "next/link";
import astroRocket from "../../../../public/astroOnRocket.png";
import {
  Heading1Size,
  Heading2Size,
  xPadding,
  TextBasicSize,
} from "@/utils/Sizing";

export default function ProgramNutshell() {
  const xPadding = useBreakpointValue({ base: 4, sm: 8, md: 24, lg: 48 });
  return (
    <Box maxW={"full"} color={"white"} bg={"black"}>
      <Flex
        px={xPadding}
        pt={4}
        pb={12}
        alignItems={"center"}
        justify={"space-between"}
        direction={{
          base: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
        }}
      >
        <Stack
          spacing={4}
          my={4}
          textAlign={{ base: "center", sm: "center", md: "left", lg: "left" }}
        >
          <Heading fontSize={Heading2Size}>
            Program in Nutshell Earn While You Learn.
          </Heading>
          ,
          <Text fontSize={TextBasicSize}>
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program's beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
          <Link>
            <Button
              colorScheme={"red"}
              textColor={"white"}
              border={"2px"}
              borderColor={"red"}
              variant={"outline"}
              size={"lg"}
              px={20}
              rounded={"3xl"}
            >
              Apply Now
            </Button>
          </Link>
        </Stack>
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
    </Box>
  );
}

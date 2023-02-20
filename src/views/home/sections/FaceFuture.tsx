"use client";
import { Box, Grid, Flex, Heading } from "@chakra-ui/react";
import FBox from "@/components/FBoxes";
import {
  Heading1Size,
  Heading2Size,
  xPadding,
  TextBasicSize,
} from "@/utils/Sizing";

export default function FaceFuture() {
  return (
    <Box maxW={"full"} color={"white"} bg={"black"} py={50}>
      <Flex
        px={xPadding}
        py={8}
        alignItems={"center"}
        justify={"space-between"}
        wrap={"wrap"}
        direction={"column"}
      >
        <Heading
          as={"h2"}
          fontSize={Heading2Size}
          fontWeight={"bold"}
          textTransform={"capitalize"}
          mb={14}
        >
          Time to Face the Future With Confidence
        </Heading>
        <Grid
          w={"full"}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={8}
        >
          <FBox name={"+3500 Memebers"} />
          <FBox name={"5 Quater Program"} />
          <FBox name={"6 Specializations"} />
          <FBox name={"Hybrid Program"} />
        </Grid>
      </Flex>
    </Box>
  );
}

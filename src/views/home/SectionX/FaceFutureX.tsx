"use client";
import { Grid, Heading, Stack } from "@chakra-ui/react";
import FBox from "@/components/FBoxes";

import SectionWrapper from "@/components/SectionWrapper";

export default function FaceFutureX() {
  return (
    <SectionWrapper>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          fontWeight={"bold"}
          textTransform={"capitalize"}
          mb={14}
          textAlign={"center"}
        >
          Time to Face the Future With Confidence
        </Heading>
        <Grid
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
      </Stack>
    </SectionWrapper>
  );
}

"use client";
import { Box, Grid, Heading, Stack } from "@chakra-ui/react";
import TrainerCard from "@/components/TrainerCard";
import { trainers } from "@/utils/Trainers";

import SectionWrapper from "@/components/SectionWrapper";

export default function TrainerX() {
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
        >
          Learn from the Best
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
          {trainers.map((trainer) => (
            <Box key={trainer.name}>
              <TrainerCard
                name={trainer.name}
                description={trainer.description}
                imageUrl={trainer.imageUrl}
                Facebookpath={trainer.Facebookpath}
                Twitterpath={trainer.Twitterpath}
                LinkedInpath={trainer.LinkedInpath}
              />
            </Box>
          ))}
        </Grid>
      </Stack>
    </SectionWrapper>
  );
}

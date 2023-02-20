"use client";
import { Box, Grid, Flex, Heading } from "@chakra-ui/react";
import TrainerCard from "@/components/TrainerCard";
import { trainers } from "@/utils/Trainers";
import {
  Heading1Size,
  Heading2Size,
  xPadding,
  TextBasicSize,
} from "@/utils/Sizing";

export default function Trainer() {
  return (
    <Box maxW={"full"} color={"white"} bg={"black"} py={50}>
      <Flex
        px={xPadding}
        py={8}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
      >
        <Heading
          as={"h2"}
          fontSize={Heading2Size}
          fontWeight={"bold"}
          textTransform={"capitalize"}
          mb={14}
        >
          Learn from the Best
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
          {trainers.map((trainer) => (
            <Box
              key={trainer.name}
              alignItems={"center"}
              justifyContent={"center"}
              w={"full"}
            >
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
      </Flex>
    </Box>
  );
}

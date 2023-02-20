"use client";
import { Box, Text, Stack, Circle, Heading } from "@chakra-ui/react";

export default function FBox({
  name,
  description,
}: {
  name: string;
  description?: string;
}) {
  return (
    <Stack
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      borderColor={"red"}
      overflow="hidden"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Text fontSize="2xl" fontWeight="semibold" mr="2">
            {name}
          </Text>
        </Box>
      </Box>
    </Stack>
  );
}

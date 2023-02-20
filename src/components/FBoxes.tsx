"use client";
import { Box, Text, Stack } from "@chakra-ui/react";

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
      borderWidth="2px"
      borderRadius="3xl"
      borderColor={"red"}
      bg="rgba(255, 255, 255, 0.1)"
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

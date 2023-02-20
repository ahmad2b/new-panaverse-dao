"use client";
import {
  Box,
  Text,
  Stack,
  Circle,
  Heading,
  Icon,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { FaCaretRight } from "react-icons/fa";

export default function QuaterCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <Stack
      maxW="sm"
      overflow="hidden"
      alignItems={{
        base: "flex-start",
        sm: "center",
        md: "center",
        lg: "center",
      }}
      justifyContent={"center"}
      direction={"column"}
    >
      <Circle
        size={"150px"}
        bg="red"
        ring={15}
        ringColor={"#232222"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={4}
      >
        <Heading>{name}</Heading>
      </Circle>

      <Box p="6">
        <Box>
          <Icon as={TriangleDownIcon} w={6} h={6} mb={4} />
          <Text
            fontSize="2xl"
            fontWeight="normal"
            textAlign={{ base: "left", sm: "left", md: "center" }}
          >
            {description}
          </Text>
        </Box>
      </Box>
    </Stack>
  );
}

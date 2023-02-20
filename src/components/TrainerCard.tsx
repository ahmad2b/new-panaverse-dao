"use client";
import {
  Box,
  Image,
  Text,
  IconButton,
  Flex,
  Stack,
  Circle,
  Link,
} from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import NextLink from "next/link";
import { TrainerType } from "@/types/TrainerType";
import {
  Heading1Size,
  Heading2Size,
  TextBasicSize,
  xPadding,
} from "@/utils/Sizing";

export default function TrainerCard({
  imageUrl,
  name,
  description,
  Facebookpath,
  Twitterpath,
  LinkedInpath,
}: TrainerType) {
  return (
    <Stack
      maxW={{ base: "xs", md: "sm", lg: "md" }}
      h={{ base: "xs", md: "xs", lg: "sm" }}
      // boxSize={"xs"}
      borderWidth="1px"
      borderRadius="lg"
      borderColor={"red"}
      overflow="hidden"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Circle
        bg="gray.100"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={8}
      >
        <Box position="relative">
          <Box
            position="absolute"
            w="100%"
            h="100%"
            bg="rgba(255, 0, 0, 0.15)"
            borderRadius="full"
          />
          <Image
            h="80px"
            w="80px"
            objectFit="cover"
            borderRadius="full"
            src={imageUrl}
            alt={name}
          />
        </Box>
      </Circle>

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Text fontSize={TextBasicSize} fontWeight="semibold" mr="2">
            {name}
          </Text>
        </Box>

        <Text
          mt="2"
          fontSize={{
            base: "md",
            sm: "lg",
            md: "lg",
            lg: "xl",
          }}
          color="gray.500"
        >
          {description}
        </Text>

        <Flex mt="2" alignItems="center">
          <Link as={NextLink} isExternal href={Twitterpath}>
            <IconButton
              size="sm"
              mr="2"
              icon={<FaTwitter />}
              aria-label="Follow on Twitter"
              colorScheme={"red"}
            />
          </Link>
          <Link isExternal as={NextLink} href={LinkedInpath}>
            <IconButton
              size="sm"
              mr="2"
              icon={<FaLinkedin />}
              aria-label="Follow on Linkedin"
              colorScheme={"red"}
            />
          </Link>

          <Link isExternal as={NextLink} href={Facebookpath}>
            <IconButton
              size="sm"
              mr="2"
              icon={<FaFacebook />}
              aria-label="Follow on Facebook"
              colorScheme={"red"}
            />
          </Link>
        </Flex>
      </Box>
    </Stack>
  );
}

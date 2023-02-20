"use client";
import {
  Box,
  Flex,
  Stack,
  Image,
  Text,
  Heading,
  Link,
  Button,
  Divider,
  StackDivider,
  Icon,
  useBreakpointValue,
  VStack,
  Grid,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaRegCopyright,
} from "react-icons/fa";
import LogoP from "@/utils/LogoP";
import { NAV_ITEMS } from "@/utils/constants";
import SocialIcons from "@/utils/SocialIcons";

export default function Footer() {
  const xPadding = useBreakpointValue({ base: 4, md: 8, lg: 24 });
  return (
    <Box bg={"black"} color={"white"} maxW={"full"}>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Divider
          borderColor={"white"}
          orientation="horizontal"
          w={"75%"}
          mb={4}
        />
        <Stack
          direction={{ base: "column", sm: "row" }}
          px={xPadding}
          py={8}
          alignItems={"center"}
          w="full"
          justifyContent={"space-between"}
          spacing={4}
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Stack w={"350px"} spacing={4}>
            <LogoP />
            <Text pt={2}>
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
            </Text>
            <Text>Getting Ready for the Next Generation of the Internet</Text>
          </Stack>

          <Box w={"200px"}>
            <VStack spacing={4} alignItems={"flex-start"}>
              {NAV_ITEMS.map((item) => (
                <Box key={item.label}>
                  <Link as={NextLink} href={item.path}>
                    {item.label}
                  </Link>
                </Box>
              ))}
            </VStack>
          </Box>

          <Stack w={"350px"} display="flex" spacing={4}>
            <Heading as={"h3"} fontSize={"lg"}>
              Socalize With Panaverse Dao
            </Heading>

            <SocialIcons />

            <Link as={NextLink} href={"/apply"}>
              <Button
                colorScheme={"whiteAlpha"}
                variant={"outline"}
                size={"sm"}
              >
                Apply Now
              </Button>
            </Link>
          </Stack>
        </Stack>

        <Divider borderColor={"white"} orientation="horizontal" w={"75%"} />

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          pb={8}
          pt={4}
        >
          <Text>2023</Text>
          <Icon as={FaRegCopyright} />
          <Text>Panaverse Dao</Text>
        </Stack>
      </Stack>
    </Box>
  );
}

"use client";
import {
  Box,
  Flex,
  Link,
  Button,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LogoP from "@/utils/LogoP";
import SectionWrapper from "@/components/SectionWrapper";

export default function Header() {
  const xPadding = useBreakpointValue({ base: 4, md: 8, lg: 24 });

  return (
    <SectionWrapper>
      {/* <Flex bg={"black"} color={"white"} maxW={"full"}> */}
      <Stack
        direction={"row"}
        py={8}
        justify={"space-between"}
        alignItems={"center"}
      >
        <LogoP />

        <DesktopNav />

        <Box display={{ base: "none", lg: "flex" }}>
          <Link as={NextLink} href={"/apply"}>
            <Button
              px={8}
              rounded={"3xl"}
              variant={"solid"}
              colorScheme={"red"}
            >
              Apply Now
            </Button>
          </Link>
        </Box>

        <MobileNav />
      </Stack>
    </SectionWrapper>
  );
}

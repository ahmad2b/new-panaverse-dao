"use client";
import { Box, Link, Stack, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { NAV_ITEMS } from "@/utils/constants";

export default function DesktopNav() {
  return (
    <Box display={{ base: "none", lg: "flex" }}>
      <HStack spacing={12}>
        {NAV_ITEMS.map((item) => (
          <Box key={item.label}>
            <Link as={NextLink} href={item.path}>
              {item.label}
            </Link>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}

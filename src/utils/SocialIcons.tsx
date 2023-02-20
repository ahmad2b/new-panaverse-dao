"use client";
import { Box, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { SOCIAL_LINKS } from "./constants";

export default function SocialIcons() {
  return (
    <Box display="flex" alignItems="center">
      {SOCIAL_LINKS.map((social) => (
        <Box mr={4} key={social.name}>
          <Link isExternal as={NextLink} href={social.path}>
            <Icon as={social.icon} boxSize={6} />
          </Link>
        </Box>
      ))}
    </Box>
  );
}

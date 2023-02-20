"use client";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NAV_ITEMS } from "@/utils/constants";

export default function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ lg: "none" }}>
      <Menu>
        <MenuButton
          colorScheme="black"
          as={IconButton}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          size="md"
          aria-label="Open menu"
        />
        <MenuList color={"black"}>
          {NAV_ITEMS.map((item) => (
            <MenuItem key={item.label}>{item.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

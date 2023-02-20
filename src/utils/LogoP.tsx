"use client";
import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function LogoP() {
  return (
    <Flex align={"center"}>
      <Image src={"/favico.png"} alt="Panaverse Logo" width={80} height={80} />
      <Heading as={"h2"} mt={2} size={"md"} fontWeight={"bold"}>
        Panaverse <br /> Dao
      </Heading>
    </Flex>
  );
}

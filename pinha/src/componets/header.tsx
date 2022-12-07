import React from "react";
import Navbar from "./navbar/navbar";
import {
    Box,
    Flex,
  } from "@chakra-ui/react";

export default function Header() {
    return(
        <Box>
            <Flex p="10" px="250" fontFamily="Sora">
                <Navbar/>
            </Flex>
        </Box>

    )
}
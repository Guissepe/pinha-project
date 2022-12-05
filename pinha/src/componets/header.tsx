import React from "react";
import Navbar from "./navbar/navbar";
import UserIcon from "./user/userbox";
import {
    Box,
    Heading,
    Text,
    Link,
    Flex,
  } from "@chakra-ui/react";
  import Continue from "../componets/Buttons/Continue"



export default function Header() {
    return(

        <Box>
            <Flex p="10" px="250">
                <Navbar/>
                <Continue/>
            </Flex>
        </Box>

    )
}
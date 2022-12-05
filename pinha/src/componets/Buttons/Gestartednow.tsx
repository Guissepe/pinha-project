import React from "react";
import { Flex, Button, Text, useDisclosure, Slide, Box, Spacer } from '@chakra-ui/react'


function GetStartedNow() {
    return(
        <Button _hover={{ background: "#C8A027" }} background="#EBC142">
            <Text>Get Started Now</Text>
        </Button>
    )
}

export default GetStartedNow;
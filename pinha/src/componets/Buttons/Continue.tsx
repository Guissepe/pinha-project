import React from "react";
import { Flex, Button, Text, useDisclosure, Slide, Box, Spacer } from '@chakra-ui/react'


function Continue() {
    return(
        <Button _hover={{ background: "#C8A027" }} background="#EBC142">
            <Text>Continue</Text>
        </Button>
    )
}

export default Continue;
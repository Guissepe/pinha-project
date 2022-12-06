import React from "react";
import { Flex, Button, Text} from '@chakra-ui/react'


 function GetStarted() {
    return(
        <Button width="15VW" height="5vw" borderRadius="3" _hover={{ background: "#C8A027" }} background="#EBC142">
            <Text>Get Started</Text>
        </Button>
    )
}

export default GetStarted;
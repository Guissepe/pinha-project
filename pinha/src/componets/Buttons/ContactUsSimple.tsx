import React from "react";
import { Flex, Button, Text, Image, Box } from '@chakra-ui/react'

function ContactSimple() {
    return(
        <Button _hover={{ background: "#cccccc" }} background="#ffffff">
            <Flex>
                <Text >Contact Us</Text>
                <Box padding="2vw"/>
                <Image height="2vw" width="2vw" src="https://www.jquery-az.com/html/images/banana.jpg"/>
            </Flex>
        </Button>   
    )
}

export default ContactSimple
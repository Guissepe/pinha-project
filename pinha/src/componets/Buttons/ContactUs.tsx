import React from "react";
import { Flex, Button, Text, useDisclosure, Slide, Box, Spacer, Image } from '@chakra-ui/react'


function Contact() {
    return(

        <Button _hover={{ background: "#383838" }} background="#000000">
            <Flex>
                <Text>Contact Us</Text>
                <Image width="20px" src="https://www.jquery-az.com/html/images/banana.jpg"/>
            </Flex>
        </Button>
    )
}

export default Contact;
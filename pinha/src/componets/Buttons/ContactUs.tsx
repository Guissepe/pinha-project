import React from "react";
import { Flex, Button, Text} from '@chakra-ui/react'


function Contact() {
    return(

        <Button _hover={{ background: "#C8A027" }} background="#EBC142">
            <Flex>
                <Text>Contact Us</Text>
            </Flex>
        </Button>
    )
}

export default Contact;
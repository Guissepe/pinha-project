import React from "react";
import { Flex, Button, Text, Image } from '@chakra-ui/react'


function Upgrade() {
    return(

        <Button _hover={{ background: "#383838" }} background="#000000" border="1px" borderStyle="solid" borderColor="343131">
            <Flex>
                <Text>Upgrade</Text>
            </Flex>
        </Button>   
    )
}
export default Upgrade
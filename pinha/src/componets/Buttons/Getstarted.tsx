import React from "react";
import { Flex, Button, Text} from '@chakra-ui/react'
import Link from "next/link";

 function GetStarted() {
    return(
        <Link href="/Signup/Signup">
                    
           <Button width="15VW" height="5vw" borderRadius="3" _hover={{ background: "#C8A027" }} background="#EBC142">
                <Text>Get Started</Text>
            </Button>     
                
        </Link>
        
    )
}

export default GetStarted;
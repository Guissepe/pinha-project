import React from "react";
import Link from "next/link";
import { Flex, Button, Text, useDisclosure, Slide, Box } from '@chakra-ui/react'

function Navbar() {
    
    return(

        <Flex  alignItems="center" height="100hv" justifyContent="center">
            <Flex direction="row" background="gray"> 

                        <Link href="/">
                            <Button border="3px" borderColor="black" borderStyle="solid" padding="10" fontFamily="sans-serif">Home</Button>
                        </Link>       
                        
                        <Link href="../Social/social">
                            <Button border="3px" borderColor="black" borderStyle="solid" padding="10" fontFamily="sans-serif">social</Button>
                        </Link>                                      
                        <Link href="../tamplate/teamplatepage">
                            <Button border="3px" borderColor="black" borderStyle="solid" padding="10" fontFamily="sans-serif">tamplates</Button>
                        </Link>                              
            </Flex>
        </Flex>
    );

}

export default Navbar
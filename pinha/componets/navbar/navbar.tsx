import React from "react";
import Link from "next/link";
import { Flex, Button, Text, useDisclosure, Slide, Box } from '@chakra-ui/react'

function Navbar() {
    const { isOpen, onToggle } = useDisclosure()
    return(

        <Flex  alignItems="center" height="100hv" justifyContent="center">
            <Flex direction="row" background="gray"> 

                        <Button onClick={onToggle} border="3px" borderColor="black" borderStyle="solid" padding="10" fontFamily="sans-serif">A random button Here</Button>
                        <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                            <Box
                            p='40px'
                            color='white'
                            mt='4'
                            bg='teal.500'
                            rounded='md'
                            shadow='md'
                            >
                                <Text>
                                    HAHA YES, i added this here for absolute no reason at all, even tho it is only activated after pressing the biggest button in the screen, and yes, it stays when you change pages.
                                </Text>
                            </Box>
                        </Slide>

                        <Link href="/">
                            <Button border="3px" borderColor="black" borderStyle="solid" padding="10" fontFamily="sans-serif">Home</Button>
                        </Link>       
                        
                        <Link href="/social">
                            <Button border="3px" borderColor="black" borderStyle="solid" padding="10" fontFamily="sans-serif">social</Button>
                        </Link>                                      
                        <Link href="../teamplatepage">
                            <Button border="3px" borderColor="black" borderStyle="solid" padding="10" fontFamily="sans-serif">tamplates</Button>
                        </Link>                              
            </Flex>
        </Flex>
    );

}

export default Navbar
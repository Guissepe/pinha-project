import React from "react";
import Link from "next/link";
import { Flex, Button, Text, useDisclosure, Slide, Box } from '@chakra-ui/react'

function Navbar() {
    const { isOpen, onToggle } = useDisclosure()
    return(

        <Flex  alignItems="center" height="100hv" justifyContent="center">
            <Flex direction="row" background="gray">        
                        <Link href="/">
                            <Button onClick={onToggle} border="3px" borderColor="black" borderStyle="solid" padding="10" fontFamily="sans-serif">Home</Button>
                        </Link>
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
                                    HAHA YES, i added this here for absolute no reason at all :D
                                </Text>
                            </Box>
                        </Slide>
                        <Link href="/social">
                            <Button border="3px" borderColor="black" borderStyle="solid" padding="10" fontFamily="sans-serif">social</Button>
                        </Link>                                      
                        <Link href="/teamplatepage">
                            <Button border="3px" borderColor="black" borderStyle="solid" padding="10" fontFamily="sans-serif">tamplates</Button>
                        </Link>                              
            </Flex>
        </Flex>
    );

}

export default Navbar
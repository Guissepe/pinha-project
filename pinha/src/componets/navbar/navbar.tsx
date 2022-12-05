import React from "react";
import Link from "next/link";



import { Flex, Button, Text, useDisclosure, Slide, Box, Spacer } from '@chakra-ui/react'

function Navbar() {
    return(
        <Flex  alignItems="center" height="100hv" justifyContent="center">
            <Flex direction="row"> 
                <Link href="../Home/Homepage">
                    <Button border="3px" padding="10" > Home </Button>
                </Link>       
                <Link href="../Social/social">
                    <Button border="3px" padding="10"> Pricing </Button>
                </Link>                                      
                {/* <Link href="../tamplate/tamplates">
                    <Button border="3px" padding="10"> About Us </Button>
                </Link>     */}
                <Spacer paddingLeft="5vw"/>

                <Flex>
                    {/* <Link href="../Social/social">
                        <Button border="3px" padding="10"> Pricing </Button>
                    </Link>                                       */}
                    <Link href="../tamplate/tamplates">
                        <Button _hover={{ background: "#C8A027" }} border="3px" padding="10" background="#EBC142" borderColor="#EBC142"  borderStyle="solid"> About Us </Button>
                    </Link>    
                </Flex>                          
            </Flex>
        </Flex>
    );
}
export default Navbar
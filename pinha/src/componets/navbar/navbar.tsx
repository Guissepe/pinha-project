import React from "react";
import Link from "next/link";
import GetStarted from "../Buttons/Getstarted";

import { Flex, Button, Spacer, Image } from '@chakra-ui/react'

function Navbar() {
    return(
        <Flex alignItems="center" height="100hv" justifyContent="center">
            <Flex direction="row"> 
                <Image src=""/>
                <Spacer paddingLeft="55%"/>
                <Link href="/Home/Homepage">
                    <Button border="3px" padding="10" > Home </Button>
                </Link>   
                <Link href="/Prices/pricing">
                    <Button border="3px" padding="10" > Pricing </Button>
                </Link>    
                <Link href="/About/AboutUs">
                    <Button border="3px" padding="10"> About Us</Button>
                </Link>

                <Spacer paddingLeft="40%"/>
                <Link href="/Signup/Login/Login">
                    <Button border="3px" padding="10"> Login </Button>
                </Link>
                <Spacer paddingLeft="2vw"/>
                <GetStarted/>
               
                                                       
            </Flex>
        </Flex>
    );
}
export default Navbar
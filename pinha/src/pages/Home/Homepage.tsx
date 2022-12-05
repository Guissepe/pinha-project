import React from "react";
import Header from "../../componets/header";
import { Footer } from "../../componets/footer";
import { Flex, Text, useDisclosure, Slide, Box, Spacer } from '@chakra-ui/react'
import GetStarted from "../../componets/Buttons/Getstarted";
import Contact from "../../componets/Buttons/ContactUs";




function HomePage() {
    return(
        <Box>
            <Text>
                Build your dream Website simple and easy
            </Text>
            <Text>
                With Winnu, you will be able to put your businness online with easy and full support
            </Text>
            <Flex>
                <GetStarted/>
                <Contact/>
                <Text>
                    slider here
                </Text>
                
            </Flex>
        </Box>
    )
}

export default HomePage;
import React from "react";
import { Flex, Text, Box, Image, Spacer} from '@chakra-ui/react'
import GetStarted from "../../componets/Buttons/Getstarted";
import Contact from "../../componets/Buttons/ContactUsSimple";
import GetStartedNow from "../../componets/Buttons/Gestartednow";
import Slider from "../../componets/Carousel/Carousel";


function HomePage() {
    return(
        <Box fontFamily="Sora">
            <Text>
                Build your dream Website simple and easy
            </Text>
            <Text>
                With Winnu, you will be able to put your businness online with easy and full support
            </Text>
            <Flex>
                <GetStarted/>
                <Spacer p="3vw"/>
                <Contact/>
                <Text>
                    slider here
                </Text>
                
                
            </Flex>
            <Slider/>
            <Box>
                <Text>
                Working with great costumers
                </Text>
                <Flex>
                    <Image/>
                    <Image/>
                    <Image/>
                </Flex>
            </Box>
            <Flex>
                <Image/>
                <Box>
                    <Text>
                        Design 
                    </Text>
                    <Text>
                        Matching pixel Perfect
                    </Text>
                    <Text>
                        We  pay a special attention to institutions, focusing on 
                        making the tool easy for them to use and maximize their 
                        online presence 
                    </Text>
                    <Text>
                        Develop 
                    </Text>
                    <Text>
                        Ship
                    </Text>
                </Box>
                
            </Flex>
            <Box>
                <Text>
                    Colaboration 
                </Text>
                <Text>
                    Bringing everyone to the file  
                </Text>
                <Text>
                    We allow you to collaborate with your teammates anytime
                    - and anywhere
                </Text>
                <Image/>
            </Box>
            <Box>
                <Text>
                    Get your Business Online  
                </Text>
                <Text>
                    Build Your Website 
                </Text>
                <GetStartedNow/>
            </Box>
        </Box>
    )
}

export default HomePage;
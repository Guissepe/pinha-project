import React from "react";
import { Flex, Text, Box, Image, Spacer} from '@chakra-ui/react'
import GetStarted from "../../componets/Buttons/Getstarted";
import Contact from "../../componets/Buttons/ContactUsSimple";
import GetStartedNow from "../../componets/Buttons/Gestartednow";
import Slider from "../../componets/Carousel/Carousel";


function HomePage() {
    return(
        <Box alignContent="center" textAlign="center" fontFamily="Sora">
            
            <Text paddingLeft="28%" paddingRight="28%" fontSize="3vw">
                Build your dream Website simple and easy
            </Text>
            <Text paddingLeft="37%" paddingRight="37%" paddingBottom="5%">
                With Winnu, you will be able to put your businness online with easy and full support
            </Text>
            
           
            <Flex paddingBottom="7%">
                <Spacer p="2vw"/>
                <GetStarted/>
                <Box padding="2vw" />
                <Contact/>    
                <Spacer p="2vw"/>   
            </Flex>
            <Slider/>
            <Box paddingTop="8vw">
                <Text paddingBottom="5vw">
                Working with great costumers
                </Text>
                <Flex width="10vw" height="10vw">
                    <Spacer padding="12vw"/>
                    <Image src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYSv-kmEqeAj6NRr09yPqvo3HGVdDsuw9ZGKRfpl9EtI6zttIJyRv7WSCMK_4eAsrm"/>
                    <Spacer padding="5vw"/>
                    <Image src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYSv-kmEqeAj6NRr09yPqvo3HGVdDsuw9ZGKRfpl9EtI6zttIJyRv7WSCMK_4eAsrm"/>
                    <Spacer padding="5vw"/>
                    <Image src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYSv-kmEqeAj6NRr09yPqvo3HGVdDsuw9ZGKRfpl9EtI6zttIJyRv7WSCMK_4eAsrm"/>
                </Flex>
            </Box>
            <Flex width="56vw" p="3vw">
                
                <Box textAlign="justify">
                    
                    <Text fontSize="3vw" >
                        Design 
                    </Text>
                    <Text fontSize="2vw">
                        Matching pixel Perfect
                    </Text>
                    <Text paddingTop="2vw">
                        We  pay a special attention to institutions, focusing on 
                        making the tool easy for them to use and maximize their 
                        online presence 
                    </Text>
                    <Text paddingTop="2vw" fontSize="3vw">
                        Develop 
                    </Text>
                    <Text fontSize="3vw">
                        Ship
                    </Text>
                </Box>
                <Image pl="10vw" width="45%" pr="5%" src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYSv-kmEqeAj6NRr09yPqvo3HGVdDsuw9ZGKRfpl9EtI6zttIJyRv7WSCMK_4eAsrm"/>
            </Flex>
            <Box background="#FFAFA3
">
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
                <Image width="75%" height="25%" paddingLeft="25%" src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYSv-kmEqeAj6NRr09yPqvo3HGVdDsuw9ZGKRfpl9EtI6zttIJyRv7WSCMK_4eAsrm"/>
            </Box>
            
            <Box p="5%">
                <Text fontSize="3vw">
                    Get your Business Online  
                </Text>
                <Spacer p="1%"/>
                <Text fontSize="2vw">
                    Build Your Website 
                </Text>
                <Spacer p="1.5%"/>
                <GetStartedNow/>
            </Box>
        </Box>
    )
}

export default HomePage;
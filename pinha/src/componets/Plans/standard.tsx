import React from "react";
import {Text, Box, Spacer, Flex} from '@chakra-ui/react'
import GetStarted from "../Buttons/Getstarted";
import Content from "./Text";


function Standard() {
    return(
        <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" fontFamily="Sora">
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" >
                <Text fontSize="2.5vw" textAlign="center" height="5vw">
                    Standard
                </Text>
            </Box>
            <Box textAlign="center" height="10vw" borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <Text fontSize="2.5vw">
                    Free
                </Text>
                <Text fontSize="1.7vw" width="24vw">
                    Fremium plan for you to start developing your website
                </Text>
            </Box>
            <Box pl="5vw" height="37vw" borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                
                <Content text={"Editor"}/>
                <Content text={"120 CMS Items"}/>
                <Content text={"1,500 Visitors"}/>
                <Content text={"Personal Sites"}/>
            </Box>
            <Box height="8vw" borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
            <Spacer pt="1vw"/>  
                <Flex>
                    <Spacer pt="2vw" pr="5vw"/>
                    <GetStarted/>
                    <Spacer pt="2vw" pl="5vw"/>   
                </Flex>
            </Box>
        </Box>
        
    )
}

export default Standard;
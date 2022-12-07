import React from "react";
import {Text, Box, Spacer, Flex} from '@chakra-ui/react'
import GetStarted from "../Buttons/Getstarted";

function Standard() {
    return(
        <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" fontFamily="Sora">
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" >
                <Text textAlign="center" height="5vw">
                    Standard
                </Text>
            </Box>
            <Box textAlign="center" height="10vw" borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <Text>
                    Free
                </Text>
                <Text fontSize="1.7vw" width="24vw">
                    Fremium plan for you to start developing your website
                </Text>
            </Box>
            <Box height="37vw" borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <Text>
                    Editor
                </Text>
                <Text>
                    120 CMS Items
                </Text>
                <Text>
                    1,500 Visitors
                </Text>
                <Text>
                    Personal Sites
                </Text>
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
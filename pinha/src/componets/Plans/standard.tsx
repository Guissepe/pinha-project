import React from "react";
import {Text, Box, } from '@chakra-ui/react'
import GetStarted from "../Buttons/Getstarted";

function Standard() {
    return(
        <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" fontFamily="Sora">
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" >
                <Text>
                    Standard
                </Text>
            </Box>
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <Text>
                    Free
                </Text>
                <Text>
                    Fremium plan for you to start developing your website
                </Text>
            </Box>
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
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
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <GetStarted/>
            </Box>
        </Box>
        
    )
}

export default Standard;
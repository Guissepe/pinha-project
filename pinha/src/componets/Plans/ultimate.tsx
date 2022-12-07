import React from "react";
import {Text, Box, Spacer, Flex} from '@chakra-ui/react'
import GetStarted from "../Buttons/Getstarted";

function Ultimate() {
    return(
        <Box borderStyle="solid" borderColor="#FFBDB4" border="2px" fontFamily="Sora">
            <Box borderStyle="solid" borderColor="#FFBDB4" border="2px" >
                <Text textAlign="center" height="5vw">
                    Ultimate
                </Text>
            </Box>
            <Box textAlign="center" height="10vw" borderStyle="solid" borderColor="#FFBDB4" border="2px">
                <Text>
                    $15
                </Text>
                <Text fontSize="1.7vw" width="24vw">
                    Ultimate plan with amazing for you and your team
                </Text>
            </Box>
            <Box height="37vw" borderStyle="solid" borderColor="#FFBDB4" border="2px">
                <Text>
                    Team Pages
                </Text>
                <Text>
                    Site Staging
                </Text>
                <Text>
                    Custom Domain
                </Text>
                <Text>
                    10,000 Visitors
                </Text>
                <Text>
                    2000 CMS Items
                </Text>
                <Text>
                    Standard and Teams
                </Text>
                <Text>
                    Multiple Team Workflows
                </Text>
            </Box>
            <Box height="8vw" borderStyle="solid" borderColor="#FFBDB4" border="2px">
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

export default Ultimate;
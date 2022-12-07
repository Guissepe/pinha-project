import React from "react";
import {Text, Box, Spacer, Flex} from '@chakra-ui/react'
import GetStarted from "../Buttons/Getstarted";

function Teams() {
    return(
        <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" fontFamily="Sora">
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" >
                <Text textAlign="center" height="5vw">
                    Teams
                </Text>
            </Box>
            <Box textAlign="center" height="10vw" borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <Text>
                    $8
                </Text>
                <Text fontSize="1.7vw" width="24vw">
                    Plans spefically for teams building amazing products

                </Text>
            </Box>
            <Box height="37vw" borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <Text>
                    Everything from Standard
                </Text>
                <Text>
                    500 CMS Items
                </Text>
                <Text>
                    5000 Visitors
                </Text>
                <Text>
                    Team Pages
                </Text>
                <Text>
                    Site Analytics
                </Text>
                <Text>
                    Custom Domain
                </Text>
                <Text>
                    Team Workflows
                </Text>
            </Box>
            <Box  height="8vw" borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
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

export default Teams;
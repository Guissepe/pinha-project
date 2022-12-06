import React from "react";
import { Text, Box } from '@chakra-ui/react'
import GetStarted from "../Buttons/Getstarted";

function Ultimate() {
    return(
        <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" fontFamily="Sora">
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" >
                <Text>
                    Ultimate
                </Text>
            </Box>
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <Text>
                    $15
                </Text>
                <Text>
                    Ultimate plan with amazing for you and your team
                </Text>
            </Box>
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
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
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <GetStarted/>
            </Box>
        </Box>
        
    )
}

export default Ultimate;
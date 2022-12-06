import React from "react";
import { Text, Box} from '@chakra-ui/react'
import GetStarted from "../Buttons/Getstarted";

function Teams() {
    return(
        <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" fontFamily="Sora">
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" >
                <Text>
                    Teams
                </Text>
            </Box>
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <Text>
                    $8
                </Text>
                <Text>
                    Plans spefically for teams building amazing products

                </Text>
            </Box>
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
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
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <GetStarted/>
            </Box>
        </Box>
        
    )
}

export default Teams;
import React from "react";
import {Text, Box, Spacer, Flex} from '@chakra-ui/react'
import GetStarted from "../Buttons/Getstarted";
import Content from "./Text";



function Teams() {
    return(
        <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" fontFamily="Sora">
            <Box borderStyle="solid" borderBottomColor="#FFBDB4" border="2px" >
                <Text fontSize="2.5vw" textAlign="center" height="5vw">
                    Teams
                </Text>
            </Box>
            <Box textAlign="center" height="10vw" borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <Text fontSize="2.5vw">
                    $8
                </Text>
                <Text fontSize="1.7vw" width="24vw">
                    Plans spefically for teams building amazing products

                </Text>
            </Box>
            <Box pl="5vw" height="37vw" borderStyle="solid" borderBottomColor="#FFBDB4" border="2px">
                <Content text={"Everything from Standard"}/>
                <Content text={"500 CMS Items"}/>
                <Content text={"5000 Visitors"}/>
                <Content text={"Team Pages"}/>
                <Content text={"Site Analytics"}/>
                <Content text={" Custom Domain"}/>
                <Content text={"Team Workflows"}/>
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
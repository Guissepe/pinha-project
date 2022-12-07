import React from "react";
import {Text, Box, Spacer, Flex} from '@chakra-ui/react'
import GetStarted from "../Buttons/Getstarted";
import Content from "./Text";

function Ultimate() {
    return(
        <Box borderStyle="solid" borderColor="#FFBDB4" border="2px" fontFamily="Sora">
            <Box borderStyle="solid" borderColor="#FFBDB4" border="2px" >
                <Text fontSize="2.5vw" textAlign="center" height="5vw">
                    Ultimate
                </Text>
            </Box>
            <Box textAlign="center" height="10vw" borderStyle="solid" borderColor="#FFBDB4" border="2px">
                <Text fontSize="2.5vw">
                    $15
                </Text>
                <Text fontSize="1.7vw" width="24vw">
                    Ultimate plan with amazing for you and your team
                </Text>
            </Box>
            <Box pl="5vw" height="37vw" borderStyle="solid" borderColor="#FFBDB4" border="2px">
                <Content text={"Team Pages"}/>
                <Content text={"Site Staging"}/>
                <Content text={"Custom Domain"}/>
                <Content text={"10,000 Visitors"}/>
                <Content text={"2000 CMS Items"}/>
                <Content text={"Standard and Teams"}/>
                <Content text={"Multiple Team Workflows"}/>
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
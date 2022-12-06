import React from "react";
import {Text, Box, } from '@chakra-ui/react'
import GetStarted from "../Buttons/Getstarted";
import Upgrade from "../Buttons/Upgrade";


function FrameText() {
    return(
        <Box>
            <Text>
            Hello David, thanks for coming. 
            You are using the Free Plan, feel 
            free to play it out with our Tool. In 
            case you want to upgrade, click 
            below 
            </Text>
            <Upgrade/>
        </Box>
    )
}
export default FrameText;
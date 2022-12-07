import React from "react";
import { Text, Box, Image } from '@chakra-ui/react'

function Content(props: { text: string;}) {
    
    const Content = String(props.text)
    
    return(
        <Box fontFamily="Sora">
            <Text pt="1vw">
                {Content}
            </Text>
            
            
        </Box>
    )
}
export default Content;
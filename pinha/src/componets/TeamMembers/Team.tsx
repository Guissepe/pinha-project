import React from "react";
import { Text, Box, Image } from '@chakra-ui/react'

function TeamPicture(props: { source: string; description: string; position: string; }) {
    const Source = String(props.source)
    const Decription = String(props.description)
    const Position = String(props.position)
    return(
        <Box p="1vw" textAlign="center" fontFamily="Sora">
            <Box background="#FFBDB4">     
                <Box>
                    <Image src={ Source } maxWidth="104px"/>
                    <Text>
                        {Decription}
                    </Text>
                    <Text>
                        {Position}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}
export default TeamPicture;
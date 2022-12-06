import React from "react";
import { Flex, Text, Box, Image, Spacer} from '@chakra-ui/react'
import GetStarted from "../../componets/Buttons/Getstarted";
import Contact from "../../componets/Buttons/ContactUsSimple";
import GetStartedNow from "../../componets/Buttons/Gestartednow";
import Slider from "../../componets/Carousel/Carousel";


function Slidepage() {
    return(
        <Box fontFamily="Sora">
                <Text>
                    slider here
                </Text>
            <Slider/>
        </Box>
        
    )
}

// /thirdonboarpage/ExampleSlider path to add i an button when we know what is this page for

export default Slidepage;
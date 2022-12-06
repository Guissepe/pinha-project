import React from "react";
import {Text, Box, Flex, Image} from '@chakra-ui/react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Slider() {
    return (

        <Box>
            <Carousel showThumbs={false} showIndicators={true} showArrows={true} centerMode={true}>
                    
                <Box>
                    <Image alt="" src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYSv-kmEqeAj6NRr09yPqvo3HGVdDsuw9ZGKRfpl9EtI6zttIJyRv7WSCMK_4eAsrm" />
                    <Text>Banana</Text>
                </Box>
                <Box>
                    <Image alt="" src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYSv-kmEqeAj6NRr09yPqvo3HGVdDsuw9ZGKRfpl9EtI6zttIJyRv7WSCMK_4eAsrm" />
                    <Text>Banana</Text>
                </Box>
                <Box>
                    <Image alt="" src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYSv-kmEqeAj6NRr09yPqvo3HGVdDsuw9ZGKRfpl9EtI6zttIJyRv7WSCMK_4eAsrm" />
                    <Text>Banana</Text>
                </Box>
                <Box>
                    <Image alt="" src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTYSv-kmEqeAj6NRr09yPqvo3HGVdDsuw9ZGKRfpl9EtI6zttIJyRv7WSCMK_4eAsrm" />
                    <Text>Banana</Text>
                </Box>
               
            </Carousel>
        

        </Box>
        
    );
}

export default Slider;
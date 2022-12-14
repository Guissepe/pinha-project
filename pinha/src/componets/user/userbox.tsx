import React from "react";
import {
    Box,
    Heading,
    Text,
    Slide,
    Flex,
    Image,
    Button,
    useDisclosure
  } from "@chakra-ui/react";
  import InfoCard from "../infocard";

export default function UserIcon() {
    const { isOpen, onToggle } = useDisclosure()
    return(
        <Box>
            <Flex>
                
            <Button 
            height="50px" 
            width="50px" 
            border="5px" 
            borderRadius="90" 
            borderStyle="solid" 
            borderColor="gray.200" 
            onClick={onToggle} 
            padding="10" 
            fontFamily="sans-serif">
                <Image src="data:image/jpeg;base64,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"/>
            </Button>
                <Slide  direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                    <Box
                    p='40px'
                    color='white'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                    
                    >
                        <InfoCard/>
                    </Box>
                </Slide>
            </Flex>
        </Box>
    )
}
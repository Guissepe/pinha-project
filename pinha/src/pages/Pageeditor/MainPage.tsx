import React from "react";
import {} from "next/router"
import SideBar from "../../componets/Sidebar/sidebar";
import { Box, Flex, Heading, Text, Link, Button } from "@chakra-ui/react";
import Continue from "../../componets/Buttons/Continue";



function MainPage() {
    return(

        <Box>
            <Flex>
                <SideBar/>
                <Box height="100%" width="100%" textAlign="center" background="#777777">
                    <Text pt="20vw" pl="25vw" width="70vw" fontSize="3vw" color="#ffffff">
                        Welcome to Winnu, let’s start building your website
                    </Text>
                    <Text pb="3vw" pt="1vw" pl="32vw" width="64vw" color="#ffffff">
                        Have fun creating a website for your business or brand without coding
                    </Text>
                    <Box pb="30%" pl="5%">
                        <Continue/>
                    </Box>
                    
                </Box>
            </Flex>
        </Box>

    );
};

export default MainPage;
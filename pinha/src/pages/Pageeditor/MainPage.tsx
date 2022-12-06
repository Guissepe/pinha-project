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
                <Box>
                    <Text>
                        Welcome to Winnu, let’s start building your website
                    </Text>
                    <Text>
                        Have fun creating a website for your business or brand without coding
                    </Text>
                    <Continue/>
                </Box>
            </Flex>
        </Box>

    );
};

export default MainPage;
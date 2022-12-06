import React from "react";
import {} from "next/router"
import SideBar from "../../componets/Sidebar/sidebar";
import { Box, Flex, Heading, Text, Link, Button } from "@chakra-ui/react";

function MainPage() {
    return(

        <Box>
            <Flex>
                <SideBar/>
                
            </Flex>
        </Box>

    );
};

export default MainPage;
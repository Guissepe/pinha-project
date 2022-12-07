import { Box, Flex, Heading, Text, Link, Button } from "@chakra-ui/react";
import React from "react";
import UserIcon from "../user/userbox";
import FrameText from "../../componets/Frame/frame";



export default function SideBar() {

  return (
    <Box width="20%">
      <UserIcon/>
      <Text>
        Recent
      </Text>
      <Text>
        Draft
      </Text>
      <Text>
        Discovery
      </Text>
      <Box border="1px" borderStyle="Solid" borderColor="#383838"/>
      <Text>
        Teams
      </Text>
      <Box pt="100%">
        <FrameText/>
      </Box>
      
    </Box>
  );
};
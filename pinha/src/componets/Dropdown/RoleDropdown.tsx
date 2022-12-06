import React from "react";
import Link from "next/link";
import GetStarted from "../Buttons/Getstarted";

import { Box, Flex, Button, Spacer, Select } from '@chakra-ui/react'

function RoleDrpdwn() {
    return(
        <Box>
            <Select _hover={{}} placeholder='Please Select an option'>
                <option value='option1'>Institutional</option>
                <option value='option2'>Personal</option>
                <option value='option3'>Student</option>
                <option value='option4'>Other</option>
            </Select>
        </Box>
    );
}
export default RoleDrpdwn


import React from "react";
import Link from "next/link";
import GetStarted from "../Buttons/Getstarted";

import { Box, Flex, Button, Spacer, Select } from '@chakra-ui/react'

function HowDrpdwn() {
    return(
        <Box>
            <Select _hover={{ background: "#C9A538" }} background="#1E1E1E" placeholder='Please Select an option'>
                <option value='option1'>Designer</option>
                <option value='option2'>Front-End Developer</option>
                <option value='option3'>Back-End Developer</option>
                <option value='option4'>Developer</option>
                <option value='option5'>Freelancer</option>
                <option value='option6'>Project Manager</option>
                <option value='option7'>Product Manager</option>
                <option value='option8'>Student</option>
                <option value='option9'>Other</option>
            </Select>
        </Box>
    );
}
export default HowDrpdwn


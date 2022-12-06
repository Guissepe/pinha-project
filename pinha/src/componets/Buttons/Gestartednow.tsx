import React from "react";
import { Button, Text} from '@chakra-ui/react'
import Link from "next/link";


function GetStartedNow() {
    return(
        <Link href="/Signup/Signup">
            <Button _hover={{ background: "#C8A027" }} background="#EBC142">
                <Text>Get Started Now</Text>
            </Button>
        </Link>
        
    )
}

export default GetStartedNow;
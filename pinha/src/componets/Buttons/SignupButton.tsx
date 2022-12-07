import React from "react";
import { Text, Box, Image, Button } from '@chakra-ui/react'
import Link from "next/link";


function Signup(props: { provlink: string; description: string;}) {
    const Decription = String(props.description)
    const ProvLink = String(props.provlink)
    return(
        <Box pt="0.5vw" pr="1vw" textAlign="center" fontFamily="Sora">
            <Link href={ProvLink}>
                <Button >
                    <Text>
                        {Decription}
                    </Text>
                </Button>
            </Link>
        </Box>
    )
}
export default Signup;
import { Flex, Text, Box, Button} from '@chakra-ui/react'
import Link from 'next/link'
import { LinkBox } from '@chakra-ui/react'

export default function Pricing() {
    return(
        
        <Box paddingLeft="31vw" alignContent="center">

                 <Text>
                 Sign In to 
                    Winnu
                 </Text>
                 <Text>
                    Build your dream Website with simplicity
                 </Text>
                 <Box  paddingLeft="12%" >
                    <Link href="/Signup/Register/Register">
                        <Button>
                            <Text>Sign up with Google</Text>
                        </Button>
                    </Link>
                 </Box>
                

                 <Flex>
                 <Link href="/Signup/Register/Register">
                    <Button>
                        <Text>Sign up with Google</Text>
                    </Button>
                 </Link>
                 
                 <Link href="/Signup/Register/Register">
                    <Button>
                        <Text>Sign up with Apple</Text>
                    </Button>
                 </Link>
                 
                 </Flex>
                 <Text>
                    By continuing, you agree to Winnu
                 </Text>
                 <Link href="">
                    <Text color="#EBC142">
                        Terms of Service, Privacy Police
                    </Text>
                 </Link>
        </Box>
    )
};


       
    



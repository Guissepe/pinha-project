import { Flex, Text, Box, Button, Spacer} from '@chakra-ui/react'
import Link from 'next/link'
import { LinkBox } from '@chakra-ui/react'
import Signup from '../../componets/Buttons/SignupButton'


export default function Pricing() {
    return(
        
        <Box textAlign="center" background="#000000" >

                 <Text pt="30vw" paddingLeft="38vw" width="58vw" color="#ffffff" fontSize="3vw">
                 Sign In to 
                    Winnu
                 </Text>
                 <Spacer p="2vw"/>
                 <Text color="#ffffff">
                    Build your dream Website with simplicity
                 </Text>
                 <Spacer p="2vw"/>
                 <Box >
                    <Signup provlink={'/Signup/Register/Register'} description={'Sign up with Google'}/>
                 </Box>
                 <Flex paddingLeft="35.5vw">
                    <Signup provlink={'/Signup/Register/Register'} description={'Sign up with Google'}/>
                    <Signup provlink={'/Signup/Register/Register'} description={'Sign up with Google'}/>
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


       
    



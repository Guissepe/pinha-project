import { Flex, Text, Box, Spacer} from '@chakra-ui/react'
import Standard from "../../componets/Plans/standard";
import Teams from "../../componets/Plans/teams";
import Ultimate from "../../componets/Plans/ultimate";

export default function Pricing() {
    return(
        
        <Box>
            
            <Flex>
                <Spacer/>
                <Standard/>
                <Spacer/>
                <Teams/>
                <Spacer/>
                <Ultimate/>
                <Spacer/>
            </Flex>
            
            <Box paddingTop="5vw" textAlign="center">

                <Text fontSize="2vw" p="2vw">
                    Quick Notes
                </Text>
                <Text>
                    Prices in USD. Taxes may apply.
                </Text>
                <Text>
                    No credit card, cancel any time.
                </Text>
                <Spacer p="1vw"/>
                <Text>
                    If you're interested in becoming an official Winnu partner, reach out 
                </Text>
                <Text >
                    to partners@togdesign.com
                </Text>
                <Spacer p="3vw"/>
            </Box>
        </Box>
    )
};


       
    



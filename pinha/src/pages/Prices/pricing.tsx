
import { Flex, Text, Box} from '@chakra-ui/react'
import Standard from "../../componets/Plans/standard";
import Teams from "../../componets/Plans/teams";
import Ultimate from "../../componets/Plans/ultimate";

export default function Pricing() {
    return(
        <Box>
            <Flex>
                <Standard/>
                <Teams/>
                <Ultimate/>
            </Flex>
            <Box textAlign="center">
                <Text>
                    Quick Notes
                </Text>
                <Text>
                    Prices in USD. Taxes may apply.
                </Text>
                <Text>
                    No credit card, cancel any time.
                </Text>
                <Text>
                    If you're interested in becoming an official Winnu partner, reach out 
                </Text>
                <Text >
                    to partners@togdesign.com
                </Text>
            </Box>
        </Box>
    )
};


       
    



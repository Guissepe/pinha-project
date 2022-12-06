import { Flex, Text, Box, Button, Input, Select} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import RoleDrpdwn from '../../../componets/Dropdown/RoleDropdown'
import HowDrpdwn from '../../../componets/Dropdown/HowtouseDropdwn'


export default function Register() {
    return(
        
        <Box>
            <Text>
               Username
            </Text>
            <Input/>
            <Text>
               Display Name
            </Text>
            <Input/>
            <Text>
               Describe your role
            </Text>
            <RoleDrpdwn/>
            <Text>
               How do want to use Winnu
            </Text>
            <HowDrpdwn/>
            <Link href="../../Pageeditor/MainPage">
               <Button _hover={{ background: "#C8A027" }} background="#EBC142">
                  <Text>
                     Create Account
                  </Text>
               </Button>
            </Link>
        </Box>
    )
};


       
    



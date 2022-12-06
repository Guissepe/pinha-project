import React from "react";
import { Flex, Text, Box } from '@chakra-ui/react'

import TeamPicture from "../../componets/TeamMembers/Team"


function Aboutus() {
    return(
        <Box textAlign="center" fontFamily="Sora">
            <Text>
                About Winnu
            </Text>
            <Text>
                Winnu is a free, user-friendly website-building platform that strives to connect small businesses and online creators with their audience. We feature an abundance of tools that allow you to grow and monetize your audience at ease. Our goal is to empower entrepreneurs who aim to scale their businesses online.
            </Text>
            <Box paddingLeft="28vw" paddingRight="28vw" background="#433D39">
                <Flex>
                    <TeamPicture source={"https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"} description={"Team member1"} position={"Programer1"}/>
                    <TeamPicture source={"https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"} description={"Team member2"} position={"Programer2"}/>
                    <TeamPicture source={"https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"} description={"Team member3"} position={"Programer3"}/>
                    <TeamPicture source={"https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"} description={"Team member4"} position={"Programer4"}/>
                </Flex>
                <Flex paddingLeft="11vw">
                    <TeamPicture source={"https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"} description={"Team member5"} position={"Programer5"}/>
                    <TeamPicture source={"https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"} description={"Team member6"} position={"Programer6"}/> 
                </Flex>
                
            </Box>

        </Box>
    )
}

export default Aboutus;
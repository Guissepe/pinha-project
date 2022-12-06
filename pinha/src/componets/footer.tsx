import { Box, Heading, Text, Flex, Spacer, Image} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
export const Footer = () => {
  return (
    <Box w="full" bg="gray.900" px="18vw" py="1px" fontFamily="Sora">
      <Heading
        color="#000000"
        letterSpacing="6px"
        alignContent="baseline"
        pb="10px"
      >
        <Flex textAlign="justify" fontFamily="Sora">
          <Box fontSize="2vw" p='4vw' >
            <Text p="10">Support</Text>
            <Box fontSize="1vw" color="#E1B0A8">
              <Text >Winnu Help</Text>
              <Spacer p="4"/>
              <Text >Contact Us</Text>
            </Box>
          </Box>
          <Spacer />
          <Box textAlign="justify" p='4vw'>
            <Text fontSize="2vw">Company</Text>
            <Spacer />
            <Box fontSize="1vw" p="10" color="#E1B0A8">
              <Text >About Us</Text>
              <Spacer p="4"/>
              <Text >Careers</Text>
              <Spacer p="4"/>
              <Text >Terms And Policies</Text>
            </Box>
          </Box>
        </Flex>
        <Flex paddingLeft="3vw">
          <Image width="25vw" height="5vw" src="https://www.jquery-az.com/html/images/banana.jpg" title="Title of image" alt="alt text here"/>
          <Spacer />
          <Box>
            <Text fontSize="1vw" fontFamily="Sora">Folow Us</Text>
          </Box>
          <Flex>
            <Spacer p="6" />
            <Link href="">
              <Image width="20px" src="https://www.jquery-az.com/html/images/banana.jpg" title="Title of image" alt="alt text here"/>
            </Link>
            <Spacer p="6" />
            <Link href="">
              <Image width="20px" src="https://www.jquery-az.com/html/images/banana.jpg" title="Title of image" alt="alt text here"></Image>
            </Link>
            <Spacer p="6" />
            <Link href="">
              <Image width="20px" src="https://www.jquery-az.com/html/images/banana.jpg" title="Title of image" alt="alt text here"/>
            </Link>
          </Flex>
        </Flex>
      </Heading>
    </Box>
  );
};
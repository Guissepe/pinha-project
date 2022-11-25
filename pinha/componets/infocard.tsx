import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Heading, Text, Link, Button } from "@chakra-ui/react";
import React from "react";
import ManPortrait from "../assets/man-portrait1x1.jpg";

export default function InfoCard() {

  return (
    <Box  w="full" px="40px" py="20px" bg="white">
      <Flex alignItems="center" pb="20px">
        <Box>
          <Heading fontSize={16} color="blue.900" mb="2px">
            Zac Yes
          </Heading>
          <Text fontSize={12} color="gray.500">
            Founder of yes
          </Text>
            <Link href="/">
              <Button>
                <Text>
                  Tamplate here
                </Text>
              </Button>
            </Link>
        </Box>
      </Flex>
    </Box>
  );
};
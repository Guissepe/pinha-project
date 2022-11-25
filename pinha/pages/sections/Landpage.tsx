import {
    Box,
    Heading,
    Text,
    Link,
    Flex,
    Button
  } from "@chakra-ui/react";
  import React from "react";
  
  export const LandP = () => {
    return (
      <Box w="full" bg="gray.200" px="200px" py="60px" >
        <Flex justifyContent="space-between" alignItems="center" pb="80px">
          <Heading fontSize={54} letterSpacing="6px" color="whiteAlpha.900">
            People who care <br /> about your growth
          </Heading>
          <Box maxW="300px">
            <Text color="whiteAlpha.700" pb="20px">
              Ready to start up your busines? then lets go!
            </Text>
            <Link href="../teamplatepage">
              <Button>
                <Text>
                    Check tamplates
                </Text>
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    );
  };
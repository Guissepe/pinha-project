import {
    Box,
    Heading,
    Text,
    Link,
    Flex,
    Icon,
    AspectRatio,
    Img,
  } from "@chakra-ui/react";
  import React from "react";
  
  export const Intro = () => {
    return (
      <Box w="full" bg="gray.200" px="200px" py="60px" >
        <Flex justifyContent="space-between" alignItems="center" pb="80px">
          <Heading fontSize={54} letterSpacing="6px" color="whiteAlpha.900">
            People who care <br /> about your growth
          </Heading>
          <Box maxW="300px">
            <Text color="whiteAlpha.700" pb="20px">
              Proident aliquip elit nostrud dolore cupidatat id reprehenderit
              magna enim ullamco eu consequat labore. Laboris irure ea pariatur
              nulla exercitation Lorem duis. Nostrud id duis deserunt nostrud
              commodo quis. Ipsum dolore dolore ut esse reprehenderit.
            </Text>
            <Link color="whiteAlpha.800">
              Explore more
            </Link>
          </Box>
        </Flex>
      </Box>
    );
  };
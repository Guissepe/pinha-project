import {     
  Box,
  Heading,
  Text,
  Link,
  Flex,
  AspectRatio,} from "@chakra-ui/react";
import React from "react";

export default function HowWeWork () {
  return (
    <Box w="full" bg="gray.200" px="200px" py="60px" mb="120px">
      <Flex justifyContent="space-between" alignItems="center" pb="80px">
        <Heading fontSize={54} letterSpacing="6px" color="whiteAlpha.900">
          A second part <br /> for the previous
        </Heading>
        <Box maxW="300px">
          <Text color="whiteAlpha.700" pb="20px">
            Proident aliquip elit nostrud dolore cupidatat id reprehenderit
            magna enim ullamco eu consequat labore. Laboris irure ea pariatur
            nulla exercitation Lorem duis. Nostrud id duis deserunt nostrud
            commodo quis. Ipsum dolore dolore ut esse reprehenderit.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
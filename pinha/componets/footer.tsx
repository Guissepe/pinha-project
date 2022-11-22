import { Box, Heading, Icon, Link } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box w="full" bg="gray.900" px="200px" py="180px" textAlign="center">
      <Heading
        color="white"
        fontSize={46}
        letterSpacing="6px"
        textAlign="center"
        pb="80px"
      >
        Want your buisness to grow? <br /> We should talk.
      </Heading>
      <Link color="whiteAlpha.800">
        Get in touch
      </Link>
    </Box>
  );
};
import { Box, Heading} from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box w="full" bg="gray.900" px="100px" py="100px" textAlign="center">
      <Heading
        color="white"
        fontSize={22}
        letterSpacing="6px"
        textAlign="center"
        pb="10px"
      >
        Want your buisness to grow? <br /> We should talk.
      </Heading>
    </Box>
  );
};
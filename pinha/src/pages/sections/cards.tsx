import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import InfoCard  from "../../componets/infocard";

export const Cards = () => {
  return (
    <Box px="200px" py="60px" bg="blue.100">
      <Heading fontSize={42} letterSpacing="4px" color="blue.900" pb="80px">
        The chosen one have spoken
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="60px">
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </Grid>
    </Box>
  );
};
import React from "react";
import {
    Box,
  } from "@chakra-ui/react";
  import { Intro } from "../sections/intro";
  import HowWeWork from "../sections/examples";
  import { Cards } from "../sections/cards";

export default function tamplates () {
  return(
    <Box>
      <Intro/>
      <Cards/>
      <HowWeWork/>
    </Box>

  )

}

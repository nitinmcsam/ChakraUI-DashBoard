import React from "react";
import NavBar from "../NavBarMenu/NavBar";
import { Flex } from '@chakra-ui/react'

function Maincomponant() {
  return (
    <div>
      <Flex>
      <NavBar/>
      <p>MainComponant</p>
      </Flex>
    </div>
  );
}

export default Maincomponant;

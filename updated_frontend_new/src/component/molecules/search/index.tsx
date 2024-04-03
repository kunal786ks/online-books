'use client';
import React from "react";
import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { SEARCH_ICON } from "@/assests/icons";
import './index.scss'
const SearchComponent = () => {
  return (
    <Box height="6vh" display="flex" alignItems="center" justifyContent="center">
      <InputGroup bg="rgb(242, 246, 255)" borderRadius="12px" ml="20px">
        <InputLeftAddon ml="20px">
          <SEARCH_ICON/>
        </InputLeftAddon>
        <Input type="text" placeholder="Search" h="40px"/>
      </InputGroup>
    </Box>
  );
};

export default SearchComponent;

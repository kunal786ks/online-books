'use client';

import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import DiscoverContent from "@/component/discover_content_display";
import DiscoverData from "@/component/molecules/slide_discover_component";


const DiscoverPage = () => {
  const [selectedMenu,setSelectedMenu]=useState<Number>(0);
 
  return (
    <Box display="flex" h="100%" w="100%" mb="20px" overflow="hidden">
      <Box
        display="flex"
        flexDir="column"
        w="100%"
        m="20px"
        gap="10px"
        bg="white"
        borderRadius="12px"
      >
        <Text
          m="20px"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
          }}
          color="rgb(133, 133, 133)"
        >
          Discover
        </Text>
        <Box display="flex">
          <DiscoverData selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
        </Box>
        <Box  m="20px"  h="70%" >
          <DiscoverContent selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}/>
        </Box>
      </Box>
    </Box>
  );
};

export default DiscoverPage;

import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { discoverContent } from "./discover.item";

const DiscoverData = ({selectedMenu,setSelectedMenu}:{
  selectedMenu:Number,
  setSelectedMenu:(key:number)=>void
}) => {
  
  return (
    <Box
      width="100%"
      ml="20px"
      mr="20px"
      height="200px"
      borderRadius="12px"
      display="flex"
      gap="20px"
    >
      {discoverContent.map((item: discoverItemInterface, key: number) => (
        <Box
          width="25%"
          bg="red"
          borderRadius="12px"
          key={key}
          bgImage={item.bg_img}
          boxShadow={selectedMenu===key?"rgba(0, 0, 0, 0.3) 0px 5px 5px, rgba(0, 0, 0, 0.22) 0px 10px 10px":""}
          bgSize="cover"
          bgPosition="center"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          cursor="pointer"
          onClick={()=>{setSelectedMenu(key)}}
        >
          <Text color={item.text_color} m="20px" style={{ fontSize: "30px" }}>
            {item.label}
          </Text>
          <Button
            m="20px"
            width="100px"
            border="none"
            height="30px"
            borderRadius="12px"
            color="white"
            bg="rgb(60, 153, 227)"
            cursor="pointer"
          >
            See More
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default DiscoverData;

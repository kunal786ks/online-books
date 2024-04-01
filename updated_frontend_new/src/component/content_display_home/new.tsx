import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { newList } from "./content.item";
import ImageComponent from "../atom/imageComponent";
import { Badge } from "@mui/material";
import { OPEN_ICON } from "@/assests/icons";

const NewFeeds = () => {
  return (
    <Box h="100%" display="flex" flexDir="column" mt="30px" >
      {newList?.map((news: any, index: number) => (
        <Box
          width=""
          h="80px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
          gap="20px"
          mt="20px"
          ml="50px"
          mr="50px"
          key={index}
        >
          <Badge 
            color="info"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            badgeContent={news.new_type}
          >
            <Box ml="30px" alignItems="center" h="80px" display="flex">
              <ImageComponent
                alt={news.label}
                src={news.img_src}
                height="60px"
                width="60px"
              />
            </Box>
            <Box mr="auto" display="flex" flexDir="column" bg="" mt="10px" ml="20px" mb="10px" justifyContent="space-between">
              <Text style={{fontSize:"20px",color:"rgb(42, 58, 82)",fontWeight:"bold"}}>{news.label}</Text>
              <Text style={{fontSize:"15px",color:"gray"}}>{news.new_type==="Blog"?"Published By : ":"Author : "}{news.news_owner}</Text>
            </Box>
          </Badge>
          <Box mr="20px" mt="20px" h="80px" >
            <Text style={{fontSize:"15px",color:"gray"}}>{news.date}</Text>
            <Text mt="10px" h="30px" cursor="pointer" alignItems="center" display="flex" justifyContent="right"><OPEN_ICON/></Text>
            </Box>
        </Box>
      ))}
    </Box>
  );
};

export default NewFeeds;

"use client";
import { Box, Text } from "@chakra-ui/react";
import { Children, useState } from "react";
import { contentItem } from "./content.item";
import { NEXT_ICON } from "@/assests/icons";
import PopularBooks from "./popularBooks";
import TopRated from "./topRated";
import Following from "./following";
import NewFeeds from "./new";

const ContentDisplay = () => {
  const [selcetedTag, setSelectedTag] = useState<Number>(0);
  const handleSelect = (index: number) => {
    setSelectedTag(index);
  };

  const renderContent = () => {
    switch (selcetedTag) {
      case 0:
        return <PopularBooks />;
      case 1:
        return <TopRated/>
      case 2:
        return <Following/>
      case 3:
        return <NewFeeds/>
      default:
        return null;
    }
  };
  return (
    <Box m="20px" h="100%">
      <Box display="flex" justifyContent="space-between">
        <Box
          display="flex"
          gap="20px"
          justifyItems="center"
          alignItems="center"
        >
          {contentItem?.map((item: contentInterface, index: number) => (
            <Box
              key={index}
              width="100px"
              justifyContent="center"
              alignItems="center"
              display="flex"
              bg={
                selcetedTag === index ? "rgb(42, 58, 82)" : "rgb(242, 246, 255)"
              }
              h="30px"
              borderRadius="100px"
              onClick={() => handleSelect(index)}
              cursor="pointer"
            >
              <Text
                color={selcetedTag === index ? "white" : "gray"}
                fontSize="15px"
              >
                {item.label}
              </Text>
            </Box>
          ))}
        </Box>
        <Text
          color="rgb(42, 58, 82)"
          fontSize="15px"
          display="flex"
          alignItems="center"
          cursor="pointer"
        >
          Next ▶️
        </Text>
      </Box>
      <Box height="83%" mt="20px" mb="20px">
        {renderContent()}
      </Box>
    </Box>
  );
};

export default ContentDisplay;

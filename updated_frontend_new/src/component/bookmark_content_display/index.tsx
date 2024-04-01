"use client";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { bookmarkMenu } from "./bookmark.menu";
import BookmarkBooks from "./bookmarkBooks";
import BookmarkBlogs from "./bookmarkBlogs";
import Completed from "./completed";

const BookMarkComponent = () => {
  const [selected, setSelected] = useState<Number>(0);
  const handleClick = (index: number) => {
    setSelected(index);
  };
  const renderContent = () => {
    switch (selected) {
      case 0:
        return <BookmarkBooks />;
      case 1:
        return <BookmarkBlogs/>
      case 2:
        return <Completed/>
      // case 3:
      //   return <NewFeeds/>
      default:
        return null;
    }
    
  };
  return (
    <Box display="flex" flexDir="column" h="90%" >
      <Box display="flex" ml="20px"  gap="20px" >
        {bookmarkMenu.map((book: any, index: number) => (
          <Text
            key={index}
            fontSize="20px"
            bg={selected === index ? "rgb(42, 58, 82)" : "rgb(242, 246, 255)"}
            height="40px"
            width="150px"
            alignItems="center"
            display="flex"
            justifyContent="center"
            borderRadius="120px"
            color={selected === index ? "white" : "black"}
            onClick={() => handleClick(index)}
          >
            {book.label}
          </Text>
        ))}
       
      </Box>
      <Box   h="95%" m="20px">
         {renderContent()}
        </Box>
    </Box>
  );
};

export default BookMarkComponent;

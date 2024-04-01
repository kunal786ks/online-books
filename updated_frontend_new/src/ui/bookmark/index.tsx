import { Box, Text } from "@chakra-ui/react";
import BookMarkComponent from "@/component/bookmark_content_display";

const BookMark = () => {
  return (
    <Box display="flex" h="100%" w="100%">
      <Box width="100%" m="20px" bg="white" borderRadius="12px">
       
        <Text
          m="20px"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
          }}
          color="rgb(133, 133, 133)"
        >
          Bookmarks  
        </Text> 
        
        
        <BookMarkComponent />
        
      </Box>
    </Box>
  );
};

export default BookMark;

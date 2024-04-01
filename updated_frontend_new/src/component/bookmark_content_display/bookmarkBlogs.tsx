import { Box, Grid, GridItem } from "@chakra-ui/react";
import { bookMarkMenuBlogs, bookMarkMenuBooks } from "./bookmark.menu";
import BlogCard from "./bookmark_card/blogCard";

const BookmarkBlogs = () => {
  return (
    <Box h="100%">
    <Grid templateColumns="repeat(3, 1fr)" gap={30}>
      {bookMarkMenuBlogs.map((blog: any, index: number) => (
        <GridItem
          w="100%"
          height="320px"
          bg="rgb(243, 246, 255)"
          borderRadius="12px"
          key={index}
          overflow="hidden"
          cursor="pointer"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.3) 0px 5px 5px, rgba(0, 0, 0, 0.22) 0px 10px 10px   ",
          }}
        >
            <BlogCard blog={blog}/>
        </GridItem>
      ))}
    </Grid>
  </Box>
  );
};

export default BookmarkBlogs;

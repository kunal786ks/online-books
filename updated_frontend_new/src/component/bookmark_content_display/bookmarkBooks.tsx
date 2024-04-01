import { Box, Grid, GridItem } from "@chakra-ui/react";
import { bookMarkMenuBooks } from "./bookmark.menu";
import BookCard from "./bookmark_card/bookCard";

const BookmarkBooks = () => {

  return (
    <Box h="100%">
      <Grid templateColumns="repeat(4, 1fr)" gap={10}>
        {bookMarkMenuBooks.map((book: any, index: number) => (
          <GridItem
            w="100%"
            height="220px"
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
           <BookCard book={book}/>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default BookmarkBooks;

'use client'
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { books } from "../setting.menu";
import ImageComponent from "@/component/atom/imageComponent";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';

const BookCard = () => {
  return (
    <Box h="100%">
      <Grid templateColumns="repeat(1, 1fr)" gap={5}>
        {books.map((book: any, index: number) => (
          <GridItem key={index} h="120px" >
            <Box ml="10px" display="flex" alignItems="center" gap="20px" >
              <ImageComponent
                alt={book.title}
                width="100px"
                src={book.src}
                height="100px"
              />
              <Box  width="350px" height="90px">
                    <Text color="gray" whiteSpace="nowrap" fontSize="18px"overflow="hidden" textOverflow="ellipsis">{book.title}</Text>
                    <Text color="gray" whiteSpace="nowrap" fontSize="14px" overflow="hidden" textOverflow="ellipsis">{book.author}</Text>
                    <Box mt="32px" display="flex" gap="10px">
                        <Box display="flex" gap="2px" alignItems="center">
                            <ThumbUpIcon htmlColor="lightgrey" sx={{fontSize:"18px"}}/>
                            <Text color="gray" display="flex" alignItems="center">{book.likes}</Text>
                        </Box>
                        <Box display="flex" gap="2px" alignItems="center">
                            <CommentIcon htmlColor="lightgrey" sx={{fontSize:"18px"}}/>
                            <Text color="gray" display="flex" alignItems="center">{book.comment}</Text>
                        </Box>
                    </Box>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default BookCard;

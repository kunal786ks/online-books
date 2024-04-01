'use client'
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { authors } from "../setting.menu";
import ImageComponent from "@/component/atom/imageComponent";


const AuthorCard = () => {
  return (
    <Box h="100%">
      <Grid templateColumns="repeat(1, 1fr)" gap={5}>
        {authors.map((book: any, index: number) => (
          <GridItem key={index} h="120px">
            {" "}
            <Box ml="10px" display="flex" alignItems="center" gap="20px">
              <ImageComponent
                alt={book.name}
                width="100px"
                src={book.img_src}
                height="100px"
              />
              <Box width="350px" height="90px">
                <Text
                  color="gray"
                  whiteSpace="nowrap"
                  fontSize="18px"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {book.name}
                </Text>
                <Text
                  color="gray"
                  whiteSpace="nowrap"
                  fontSize="14px"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {book.author_type}
                </Text>
                <Text
                  color="gray"
                  whiteSpace="nowrap"
                  fontSize="14px"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  mt="10px"
                >
                  {book.author_bio}
                </Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default AuthorCard;

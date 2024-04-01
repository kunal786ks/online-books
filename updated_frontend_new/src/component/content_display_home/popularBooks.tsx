import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { popularItem } from "./content.item";
import ImageComponent from "../atom/imageComponent";

const PopularBooks = () => {
  return (
    <Box h="100%" display="flex" justifyContent="space-around">
      <Grid templateColumns="repeat(5, 1fr)" gap="30px">
        {popularItem?.map((book: popularInterface, index: number) => (
          <GridItem w="100%" h="10" key={index}>
            <ImageComponent
              alt={book.title}
              height="200px"
              width="180px"
              src={book.src}
            />
            <Text
              color="rgb(42, 58, 82)"
              style={{ fontWeight: "bold" }}
              mt="10px"
            >
              {book.title}
            </Text>
            <Text color="rgb(118, 122, 131)" style={{ fontSize: "15px" }}>
              {book.author}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularBooks;

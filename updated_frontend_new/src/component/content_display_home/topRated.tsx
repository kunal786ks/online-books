import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { topRatedItem } from "./content.item";
import ImageComponent from "../atom/imageComponent";
import { Rating } from "@mui/material";

const TopRated = () => {
  return (
    <Box h="100%" display="flex" justifyContent="space-around">
      <Grid templateColumns="repeat(5, 1fr)" gap="30px">
        {topRatedItem?.map((book: topRatedInterface, index: number) => (
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
            <Box display="flex" justifyContent="space-between">
              <Text
                color="rgb(118, 122, 131)"
                style={{
                  fontSize: "15px",
                  width:"80px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {book.author}
              </Text>
              <Rating
                size="small"
                name="read-only"
                precision={0.5}
                value={book.rating}
                readOnly
              />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default TopRated;

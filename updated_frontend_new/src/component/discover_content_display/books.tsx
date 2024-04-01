import React from "react";
import { books } from "./discover.menu";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { BOOKMARK_ICON, FAV_ICON } from "@/assests/icons";

const Books = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {books.map((book: any, index: number) => (
        <GridItem
          w="100%"
          h="10"
          height="232px"
          key={index}
          borderBottom="1px solid lightgray"
          display="flex"
          gap="30px"
          alignItems="center"
        >
          <img
            src={book.bg_img}
            height="200px"
            style={{ borderRadius: "12px" }}
            width="150px"
          />
          <Box
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            height="200px"
            width="100%"
          >
            <Box mt="5px">
              <Text color="rgb(71, 71, 71)" fontSize="20px">
                {book.title}
              </Text>
              <Text color="rgb(102, 102, 102)" mt="8px">
                {book.author}
              </Text>
              <Text mt="20px" color="gray" height="45px" overflow="hidden" textOverflow="ellipsis">
                {book.description}
              </Text>
            </Box>
            <Box display="flex" alignItems="center" gap="10px" mt="15px">
              <Button
                cursor="pointer"
                border="none"
                mb="10px"
                color="white"
                bg="rgb(60, 202, 144)"
                height="40px"
                borderRadius="12px"
                width="100px"
                fontSize="17px"
              >
                View
              </Button>

              <Text alignItems="center" cursor="pointer">
                <FAV_ICON />
              </Text>
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Books;

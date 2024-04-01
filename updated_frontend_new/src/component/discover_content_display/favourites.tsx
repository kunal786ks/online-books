import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { favorites } from "./discover.menu";

const Favourites = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {favorites.map((fav: any, index: number) => (
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
            src={fav.img_src}
            height="200px"
            width="130px"
            style={{
              borderRadius: "12px",
              objectFit: "contain",
              background: "lightgray",
            }}
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
                {fav.title}
              </Text>
              <Text color="rgb(102, 102, 102)" mt="8px">
                {fav.type}
              </Text>
              <Text color="rgb(102, 102, 102)" mt="8px">
                {fav.type === "Blog"
                  ? "Published By: " + fav.owner
                  : "Author: " + fav.owner}
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
                Remove
              </Button>
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Favourites;

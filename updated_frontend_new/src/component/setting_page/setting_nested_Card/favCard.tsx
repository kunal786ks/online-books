'use client'
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { favItem } from "../setting.menu";
import ImageComponent from "@/component/atom/imageComponent";

const FavCard = () => {
  return (
    <Box h="100%">
      <Grid templateColumns="repeat(1, 1fr)" gap={5}>
        {favItem.map((book: any, index: number) => (
          <GridItem key={index} h="120px">
            {" "}
            <Box ml="10px" display="flex" alignItems="center" gap="20px">
              <ImageComponent
                alt={book.title}
                width="100px"
                src={book.src}
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
                  {book.title}
                </Text>
                <Text
                  color="gray"
                  whiteSpace="nowrap"
                  fontSize="14px"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {book.type}
                </Text>
                <Text
                    mt="10px"
                  color="gray"
                  whiteSpace="nowrap"
                  fontSize="12px"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >Owner: {book.owner}</Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default FavCard;

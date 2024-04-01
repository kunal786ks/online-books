import React from "react";
import NotFollowed from "../atom/notFollowed";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { followingList } from "./content.item";
import AvatarComponent from "../atom/avatarComponent";

const Following = () => {
  return (
    <>
      {followingList.length === 0 ? (
        <Box
          height="100%"
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <NotFollowed />
          <Text
            style={{
              color: "rgb(45, 58, 82)",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "fantasy",
            }}
          >
            You didnot follow any author, follow to get their updates
          </Text>
        </Box>
      ) : (
        <Box h="100%" display="flex" justifyContent="space-around">
          <Grid templateColumns="repeat(5, 1fr)" gap="30px">
            {followingList?.map((author: any, index: number) => (
              <GridItem w="100%" h="10" key={index}>
                <Box
                  w="180px"
                  height="250px"
                  display="flex"
                  justifyContent="center"
                  flexDir="column"
                >
                  <Box style={{ textAlign: "center" }}>
                    <AvatarComponent
                      name={author.auhthor_name}
                      height="150px"
                      width="150px"
                      url={author.author_img}
                    />
                  </Box>

                  <Text
                    color="rgb(42, 58, 82)"
                    style={{ fontWeight: "bold", textAlign: "center" }}
                    mt="5px"
                  >
                    {author.auhthor_name}
                  </Text>
                  <Text
                    color="rgb(118, 122, 131)"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  >
                    {author.author_type}
                  </Text>
                  <Box width="100%" alignItems="center"  display="flex" justifyContent="center">
                  <Button bg="rgb(38, 58, 83)" color="white" mt="5px" width="80%" height="30px"border="none" borderRadius="12px" cursor="pointer">
                    Unfollow
                  </Button>
                  </Box>
                 
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Following;

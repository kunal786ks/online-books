import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { blogsMenu } from './discover.menu'
import { COMMENT_ICON, LIKE_ICON } from '@/assests/icons'

const Blogs = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
    {blogsMenu.map((blog: any, index: number) => (
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
          src={blog.img_src}
          height="200px"
          style={{ borderRadius: "12px" }}
          width="300px"
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
              {blog.title}
            </Text>
            <Text color="rgb(102, 102, 102)" mt="8px">
              Published By : {blog.owner}
            </Text>
            <Text mt="20px" color="gray" height="45px" overflow="hidden" textOverflow="ellipsis">
                {blog.body}
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
              Read
            </Button>

            <Text alignItems="center" cursor="pointer">
              <LIKE_ICON/> 
            </Text>
            <Text color="gray">
            {blog.likes}
            </Text>
            <Text alignItems="center" cursor="pointer">
              <COMMENT_ICON/> 
            </Text>
            <Text color="gray">
            {blog.likes}
            </Text>
          </Box>
        </Box>
      </GridItem>
    ))}
  </Grid>
  )
}

export default Blogs

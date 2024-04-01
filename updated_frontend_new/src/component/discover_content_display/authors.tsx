import { FAV_ICON, LIKE_ICON } from '@/assests/icons'
import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react'
import { authors } from './discover.menu'


const Authors = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {authors.map((author: any, index: number) => (
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
            src={author.img_src}
            height="200px"
            width="200px"
            style={{ borderRadius: "12px" }}
            
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
                {author.name}
              </Text>
              <Text color="rgb(102, 102, 102)" mt="8px">
                {author.author_type}
              </Text>
              <Text mt="20px" color="gray" height="45px" overflow="hidden" textOverflow="ellipsis">
                {author.author_bio}
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
                Follow
              </Button>

              <Text alignItems="center" cursor="pointer">
                <LIKE_ICON/>
              </Text>
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
  )
}

export default Authors

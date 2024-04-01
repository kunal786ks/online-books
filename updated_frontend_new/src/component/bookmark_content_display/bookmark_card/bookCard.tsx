'use client'
import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react'
import ImageComponent from '../../atom/imageComponent'
import { LinearProgress, Tooltip } from '@mui/material'
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AvatarComponent from '../../atom/avatarComponent';

const BookCard = ({book}:{book:any}) => {
    const [remove, setRemove] = useState<boolean>(false);
  const handleClick = () => {
    setRemove(!remove);
  };
  return (
    <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    h="100%"
    width="100%"
    gap="10px"
    ml="10px"
    mr="10px"
  >
    <ImageComponent
      src={book.src}
      alt={book.title}
      width="150px"
      height="200px"
    />
    <Box
      display="flex"
      mr="auto"
      flexDir="column"
      justifyContent="space-between"
      h="80%"
    >
      <Box w="100%" display="flex" gap="10px">
        <AvatarComponent
          url={book.author_img}
          name={book.author}
          height="40px"
          width="40px"
        />
        <Box>
          <Text
            fontSize="20px"
            color="rgb(45, 58, 82)"
            w="150px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {book.title}
          </Text>
          <Text fontSize="15px" color="gray">
            {book.author}
          </Text>
        </Box>
      </Box>
      <Text
        fontSize="15px"
        mb="auto"
        mt="20px"
        ml="10px"
        mr="5px"
        color="gray"
        display="flex"
        flexWrap="wrap"
      >
        {book.about}
      </Text>
      <Box
        width="200px"
        h="10px"
        flexDir="row"
        display="flex"
        alignItems="center"
        gap="10px"
      >
        <Tooltip title={`${book.completed}% completed`}>
          <LinearProgress
            value={book.completed}
            variant="determinate"
            sx={{ cursor: "pointer", width: "150px" }}
          />
        </Tooltip>
        <Text fontSize="15px" color="gray">
          {book.completed}%{" "}
        </Text>
        <Tooltip title={!remove?"Remove from bookmark":"Add Book mark"}>
          <Box onClick={handleClick}>
            {remove?<BookmarkBorderIcon htmlColor="rgb(56, 116, 208)"/>:<BookmarkIcon htmlColor="rgb(56, 116, 208)" />}
          </Box>
        </Tooltip>
      </Box>
    </Box>
  </Box>
  )
}

export default BookCard

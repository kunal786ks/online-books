import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import ImageComponent from "../../atom/imageComponent";
import AvatarComponent from "../../atom/avatarComponent";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import { Tooltip } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const BlogCard = ({ blog }: { blog: any }) => {
    const [remove, setRemove] = useState<boolean>(false);
    const handleClick = () => {
      setRemove(!remove);
    };
  return (
    <Box h="100%" width="100%" gap="10px">
      <ImageComponent
        alt={blog.blog_title}
        width="100%"
        src={blog.blog_img}
        height="250px"
      />

      <Box
        borderRadius="12px"
        transform="translateY(-4px)"
        ml="20px"
        mr="20px"
        mb="100px"
        zIndex="100"
        height="150px"
        bg="white"
        position="relative"
        marginTop="-100px"
      >
        <Box padding="10px" display="flex" gap="10px">
          <AvatarComponent
            url={blog.onwer_img}
            name={blog.blog_owner}
            height="60px"
            width="60px"
          />
          <Box display="flex" flexDir="column">
            <Text
              fontSize="18px"
              mt="8px"
              color="rgb(45, 58, 82)"
              fontWeight="bold"
            >
              {blog.blog_title}
            </Text>
            <Text fontSize="15px" mt="5px" color="gray">
              {blog.blog_owner}
            </Text>
          </Box>
          <Box ml="auto" display="flex" gap="10px">
            <Box display="flex" gap="2px" alignItems="center" h="30px">
              <Text alignItems="center">
                <ThumbUpIcon htmlColor="rgb(153, 194, 214)" />
              </Text>
              <Text alignItems="center" color="gray">
                {blog.blog_likes}
              </Text>
            </Box>
            <Box display="flex" gap="2px" alignItems="center" h="30px">
              <Text alignItems="center">
                <CommentIcon htmlColor="rgb(153, 194, 214)" />
              </Text>
              <Text alignItems="center" color="gray">
                {blog.blog_comment}
              </Text>
              <Tooltip title={!remove?"Remove from bookmark":"Add Book mark"}>
          <Box onClick={handleClick}>
            {remove?<BookmarkBorderIcon htmlColor="rgb(158, 193, 213)"/>:<BookmarkIcon htmlColor="rgb(158, 193, 213)" />}
          </Box>
        </Tooltip>
            </Box>
          </Box>
        </Box>
        <Box
          padding="10px"
          color="gray"
          display="flex"
          flexWrap="wrap"
          overflow="hidden"
          height="90p"
        >
          {blog.blog_about}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;

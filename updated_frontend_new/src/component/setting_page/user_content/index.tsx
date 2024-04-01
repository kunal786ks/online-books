'use client'
import { Box, Text } from "@chakra-ui/react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Person3Icon from "@mui/icons-material/Person3";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookComponent from "../setting_card/bookComponent";
import BlogComponent from "../setting_card/blogComponent";
import AuthorComponent from "../setting_card/authorComponent";
import FavComponent from "../setting_card/favComponent";

const SettingContent = () => {
  return (
    <div>
    <Box display="flex" bg="white" h="100%" borderRadius="12px">
      <Box display="flex" m="20px" w="100%" gap="30px">
        <Box
          w="50%"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          borderRadius="12px"
          overflow="hidden"
        >
          <Box
            display="flex"
            w="100%"
            h="50px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              bg="rgb(235, 239, 255)"
              h="50px"
              width="50%"
              display="flex"
              alignItems="center"
              padding="10px"
              borderRadius="12px"
              gap="10px"
              cursor="pointer"
            >
              <LibraryBooksIcon
                sx={{ fontSize: "30px" }}
                htmlColor="rgb(133, 135, 139)"
              />
              <Text color="rgb(133, 135, 139)" fontSize="18px">
                Books added (5)
              </Text>
            </Box>
            <Box
              bg="rgb(235, 239, 255)"
              h="50px"
              width="50%"
              display="flex"
              alignItems="center"
              ml="30px"
              padding="10px"
              borderRadius="12px"
              gap="10px"
              cursor="pointer"
            >
              <ContentPasteIcon
                sx={{ fontSize: "30px" }}
                htmlColor="rgb(133, 135, 139)"
              />
              <Text color="rgb(133, 135, 139)" fontSize="18px">
                Blogs added (710)
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            h="100%"
            mt="20px"
            borderRadius="12px"
            display="flex"
            flexDir="column"
            gap="20px"
          >
            <Box w="100%" h="50%" borderRadius="12px" overflow="hidden">
              <BookComponent />
            </Box>
            <Box w="100%" h="50%" borderRadius="12px">
              <BlogComponent />
            </Box>
          </Box>
        </Box>
        <Box
          w="50%"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          borderRadius="12px"
          overflow="hidden"
        >
          <Box
            display="flex"
            w="100%"
            h="50px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              bg="rgb(235, 239, 255)"
              h="50px"
              width="50%"
              display="flex"
              alignItems="center"
              padding="10px"
              borderRadius="12px"
              gap="10px"
              cursor="pointer"
            >
              <Person3Icon
                sx={{ fontSize: "30px" }}
                htmlColor="rgb(133, 135, 139)"
              />
              <Text color="rgb(133, 135, 139)" fontSize="18px">
                Your Authors (710)
              </Text>
            </Box>
            <Box
              bg="rgb(235, 239, 255)"
              h="50px"
              width="50%"
              display="flex"
              alignItems="center"
              ml="30px"
              padding="10px"
              borderRadius="12px"
              gap="10px"
              cursor="pointer"
            >
              <FavoriteIcon
                sx={{ fontSize: "30px" }}
                htmlColor="rgb(133, 135, 139)"
              />
              <Text color="rgb(133, 135, 139)" fontSize="18px">
                Your Favorite (710)
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            h="100%"
            mt="20px"
            borderRadius="12px"
            display="flex"
            flexDir="column"
            gap="20px"
          >
            <Box
              w="100%"
              h="50%"
              borderRadius="12px"
            >
              <AuthorComponent />
            </Box>
            <Box
              w="100%"
              h="50%"
              borderRadius="12px"
            >
              <FavComponent />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    </div>
  );
};

export default SettingContent;

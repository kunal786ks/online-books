import ContentDisplay from "@/component/content_display_home";
import Authors from "@/component/molecules/auth_data";
import Blogs from "@/component/molecules/blogs";
import SingleBook from "@/component/single_book";
import { Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <Box display="flex" h="100%" w="100%" suppressHydrationWarning>
        <Box display="flex" flexDir="column" w="70%" m="20px" gap="10px">
          <Box
            w="100%"
            height="75%"
            bg="white"
            borderRadius="12px"
            overflow="hidden"
          >
            <ContentDisplay />
          </Box>
          <Box w="100%" height="8%" bg="white" borderRadius="12px">
            {/* this will take the src of image name of book progress annd percentage for percentage i can use mui linear progress with label */}
            <SingleBook />
          </Box>
          <Box w="100%" height="8%" bg="white" borderRadius="12px">
            <SingleBook />
          </Box>
          <Box w="100%" height="8%" bg="white" borderRadius="12px">
            <SingleBook /> 
          </Box>
        </Box>
        <Box w="25%" m="20px" display="flex" flexDir="column" gap="10px">
          <Box h="40%" w="100%" bg="white" borderRadius="12px">
            <Authors />
          </Box>
          <Box h="60%" w="100%" bg="white" borderRadius="12px">
            <Blogs />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;

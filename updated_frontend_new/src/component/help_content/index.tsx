import { Box, Text } from "@chakra-ui/react";
import ExtensionIcon from "@mui/icons-material/Extension";
import CasinoIcon from "@mui/icons-material/Casino";
import QuizIcon from "@mui/icons-material/Quiz";

const HelpContent = () => {
  return (
    <Box
      mt="40px"
      mb="60px"
      h="60%"
      display="flex"
      justifyContent="space-between"
      gap="20px"
    >
      <Box
        width="33%"
        bg="white"
        borderRadius="12px"
        display="flex"
        flexDir="column"
        alignItems="center"
        cursor="pointer"
      >
        <ExtensionIcon
          htmlColor="rgb(126, 80, 253)"
          sx={{ fontSize: "70px", marginTop: "60px" }}
        />
        <Text mt="20px" color="rgb(96, 139, 255)" fontSize="25px">
          Getting started
        </Text>
        <Text fontSize="25px" mt="20px" color="rgb(156, 160, 169)">
          Start off on the right foot ! Not the left one
        </Text>
      </Box>
      <Box
        width="33%"
        bg="white"
        borderRadius="12px"
        display="flex"
        flexDir="column"
        alignItems="center"
        cursor="pointer"
      >
        <CasinoIcon
          htmlColor="rgb(23, 105, 250)"
          sx={{ fontSize: "70px", marginTop: "60px" }}
        />
        <Text mt="20px" color="rgb(96, 139, 255)" fontSize="25px">
          Account Settings
        </Text>
        <Text
          ml="20px"
          mr="20px"
          fontSize="25px"
          mt="20px"
          color="rgb(156, 160, 169)"
        >
          You're are a special snowflake, Account
        </Text>
      </Box>
      <Box
        width="33%"
        bg="white"
        borderRadius="12px"
        display="flex"
        flexDir="column"
        alignItems="center"
        cursor="pointer"
      >
        <QuizIcon
          htmlColor="rgb(59, 43, 172)"
          sx={{ fontSize: "70px", marginTop: "60px" }}
        />
        <Text mt="20px" color="rgb(96, 139, 255)" fontSize="25px">
          F.A.Q
        </Text>
        <Text fontSize="25px" mt="20px" color="rgb(156, 160, 169)">
          All you can eat self-serve problem solving
        </Text>
      </Box>
    </Box>
  );
};

export default HelpContent;

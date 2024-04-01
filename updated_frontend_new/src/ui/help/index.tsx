import ImageComponent from "@/component/atom/imageComponent";
import HelpContent from "@/component/help_content";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";

const Help = () => {
  return (
    <Box display="flex" flexDir="column" h="100%">
      <Box
        bg="white"
        m="20px 20px 0px 20px"
        h="40%"
        borderRadius="12px"
        display="flex"
        gap="30px"
      >
        <Box display="flex" flexDir="column" gap="40px" mt="60px">
          <Text
            ml="40px"
            fontSize="25px"
            fontWeight="bold"
            color="rgb(133, 133, 133)"
          >
            Welcome to Online Books Support
          </Text>
          <Box display="flex" gap="20px">
            <InputGroup
              ml="40px"
              border="1px solid rgb(217, 229, 253)"
              borderRadius="12px"
              height="60px"
              alignItems="center"
            >
              <InputLeftAddon ml="10px">
                <SearchIcon
                  htmlColor="rgb(176, 201, 251)"
                  sx={{ fontSize: "35px" }}
                />
              </InputLeftAddon>
              <Input
                autoComplete="one-time-code"
                type="text"
                placeholder="How Can We Help You?"
                border="none"
                h="40px"
                bg="none"
                _placeholder={{ color: "rgb(185, 193, 204)" }}
              />
            </InputGroup>
            <Button
              border="none"
              bg="rgb(64, 122, 255)"
              color="white"
              width="200px"
              borderRadius="50px"
              fontSize="20px"
              cursor="pointer"
            >
              Search
            </Button>
          </Box>
        </Box>
        <Box width="100%" alignItems="center" display="flex" justifyContent="center">
          <ImageComponent
            alt="help_image"
            width="90%"
            src="./help_image.jpg"
            height="250px"
          />
        </Box>
      </Box>
      <Box h="60%" m="22px 20px 20px 20px">
        <Box>
          <Text fontSize="22px" fontWeight="bold" color="grey">Need help? We've got your back</Text>
          <Text mt="5px" color="grey">Perhaps you can find the answers in our collections</Text>
        </Box>
        <HelpContent/>
      </Box>
    </Box>
  );
};

export default Help;

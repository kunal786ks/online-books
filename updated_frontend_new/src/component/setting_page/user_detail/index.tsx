"use client";
import ImageComponent from "@/component/atom/imageComponent";
import { Box, Button, Text } from "@chakra-ui/react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import KeyIcon from "@mui/icons-material/Key";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { useAppSelector } from "@/store/store";

const UserDetails = () => {
  const userDetails = useAppSelector((state) => state.userReducer?.user);

  return (
    <Box m="20px" h="95%">
      <Text
        mt="20px"
        fontSize="25px"
        color="rgb(133, 135, 139)"
        textDecoration="underline"
      >
        Account Information
      </Text>
      <Box
        display="flex"
        alignItems="center"
        gap="20px"
        mt="20px"
        bg="rgb(234, 239, 255)"
        borderRadius="12px"
      >
        <ImageComponent
          alt="user"
          width="200px"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          height="200px"
        />
        <Box width="100%">
          <Text
            fontSize="30px"
            color="rgb(133, 135, 139)"
            display="flex"
            flexWrap="wrap"
            width="100%"
          >
            {userDetails?.userName &&
              userDetails?.userName.charAt(0).toUpperCase() +
                userDetails.userName.slice(1)}
          </Text>
          <Text color="gray">normal user</Text>
        </Box>
        <Box mb="auto" mt="10px" ml="5px" cursor="pointer" mr="10px">
          <BorderColorIcon htmlColor="rgb(133, 135, 139)" />
        </Box>
      </Box>

      <Box
        h="40%"
        mt="20px"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        w="100%"
        bg="rgb(235, 239, 255)"
        borderRadius="12px"
        p="10px"
      >
        <Box
          h="60px"
          display="flex"
          alignItems="center"
          gap="10px"
          w="100%"
          bg="rgb(200, 209, 224)"
          borderRadius="12px"
          p="10px"
        >
          <EmailIcon htmlColor="rgb(133, 135, 139)" sx={{ height: "90px" }} />
          <Text
            width="300px"
            color="rgb(133, 135, 139)"
            display="flex"
            h="40px"
            fontSize="20px"
            alignItems="center"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {userDetails?.email}
          </Text>
        </Box>
        <Box
          h="60px"
          display="flex"
          alignItems="center"
          gap="10px"
          w="100%"
          mt="10px"
          bg="rgb(200, 209, 224)"
          borderRadius="12px"
          p="10px"
        >
          <KeyIcon htmlColor="rgb(133, 135, 139)" sx={{ height: "90px" }} />
          <Text
            width="300px"
            color="rgb(133, 135, 139)"
            display="flex"
            h="40px"
            fontSize="20px"
            alignItems="center"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            user pass
          </Text>
        </Box>
        <Box
          h="60px"
          mt="10px"
          display="flex"
          alignItems="center"
          gap="10px"
          w="100%"
          bg="rgb(200, 209, 224)"
          borderRadius="12px"
          p="10px"
        >
          <LocalPhoneIcon
            htmlColor="rgb(133, 135, 139)"
            sx={{ height: "90px" }}
          />
          <Text
            width="80%"
            color="rgb(133, 135, 139)"
            display="flex"
            h="40px"
            fontSize="20px"
            alignItems="center"
          >
            +91 574737436463
          </Text>
        </Box>
        <Box
          h="60px"
          mt="10px"
          display="flex"
          alignItems="center"
          gap="10px"
          w="100%"
          bg="rgb(200, 209, 224)"
          borderRadius="12px"
          p="10px"
        >
          <HomeIcon htmlColor="rgb(133, 135, 139)" sx={{ height: "90px" }} />
          <Text
            width="300px"
            color="rgb(133, 135, 139)"
            display="flex"
            h="40px"
            fontSize="20px"
            alignItems="center"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            user address
          </Text>
        </Box>
      </Box>

      <Button
        mt="20px"
        border="none"
        width="100%"
        height="50px"
        borderRadius="12px"
        color="white"
        bg="rgb(255, 100, 120)"
        cursor="pointer"
        fontSize="18px"
      >
        Delete Account
      </Button>
      <Button
        mt="10px"
        border="none"
        width="100%"
        height="50px"
        borderRadius="12px"
        color="white"
        bg="rgb(39, 169, 255)"
        cursor="pointer"
        fontSize="18px"
      >
        Sign out
      </Button>
      <Text
        mt="15px"
        fontSize="15px"
        color="rgb(133, 135, 139)"
        textDecoration="underline"
      >
        Link Platfroms
      </Text>
      <Box display="flex" gap="20px" mt="15px">
        <FacebookIcon
          htmlColor="rgb(123, 178, 255)"
          style={{ fontSize: "20px", cursor: "pointer" }}
        />
        <InstagramIcon
          htmlColor="red"
          style={{ fontSize: "20px", cursor: "pointer" }}
        />
        <XIcon htmlColor="black" sx={{ fontSize: "18px", cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default UserDetails;

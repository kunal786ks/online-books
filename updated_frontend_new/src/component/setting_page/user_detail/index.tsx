"use client";
import ImageComponent from "@/component/atom/imageComponent";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import KeyIcon from "@mui/icons-material/Key";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useAppSelector } from "@/store/store";
import UserImageModal from "@/component/modal/userImageModal";
import { Tooltip } from "@mui/material";
import UserSettingModal from "@/component/modal/userSettingModal/userSettingModal";

const UserDetails = () => {
  const userDetails = useAppSelector((state) => state.userReducer);
  console.log(userDetails,"this is userDetails")
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
        <Box display="flex" alignItems="center" position="relative">
          <UserImageModal>
            <Tooltip title="Update profile pic">
              <Box
                zIndex="100"
                position="absolute"
                top="3px"
                right="9px"
                cursor="pointer"
              >
                <AddAPhotoIcon htmlColor="white" />
              </Box>
            </Tooltip>
          </UserImageModal>

          <ImageComponent
            alt="user"
            width="200px"
            src={userDetails?.userImage}
            height="200px"
          />
        </Box>

        <Box width="100%">
          <Text
            fontSize="30px"
            color="rgb(133, 135, 139)"
            display="flex"
            flexWrap="wrap"
            width="100%"
          >
            {userDetails?.user?.userName &&
              userDetails?.user?.userName.charAt(0).toUpperCase() +
              userDetails?.user?.userName.slice(1)}
          </Text>
          <Text color="gray">normal user</Text>
        </Box>
        <Box mb="auto" mt="10px" ml="5px" cursor="pointer" mr="10px">
          <UserSettingModal>
            <BorderColorIcon htmlColor="rgb(133, 135, 139)" />
          </UserSettingModal>
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
            {userDetails?.user?.email}
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
          <LanguageIcon
            htmlColor="rgb(133, 135, 139)"
            sx={{ height: "90px" }}
          />
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
            {/* {userDetails?.user?.website ? "ADD YOUR WEBSITE" : `${userDetails?.user?.website}`} */}
            {userDetails?.user?.website}
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
            +91 {userDetails?.user?.phone}
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
            {userDetails?.user?.address}
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
        mt="20px"
        fontSize="15px"
        color="rgb(133, 135, 139)"
        textDecoration="underline"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        Link Platfroms
      </Text>
      <Box
        display="flex"
        gap="20px"
        mt="15px"
        width="100%"
        justifyContent="center"
      >
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

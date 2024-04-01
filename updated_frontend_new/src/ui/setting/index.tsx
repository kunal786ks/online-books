"use client";
import { Box } from "@chakra-ui/react";
import SettingContent from "@/component/setting_page/user_content";
import UserDetails from "@/component/setting_page/user_detail";

const Setting = () => {
  return (
    <>
      <Box display="flex" h="100%">
        <Box w="70%" m="20px" gap="10px" borderRadius="12px">
          <SettingContent />
        </Box>
        <Box w="30%" m="20px" gap="10px" bg="white" borderRadius="12px">
          <UserDetails />
        </Box>
      </Box>
    </>
  );
};

export default Setting;

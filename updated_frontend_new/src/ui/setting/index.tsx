"use client";
import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import SettingContent from "@/component/setting_page/user_content";
import UserDetails from "@/component/setting_page/user_detail";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addError } from "@/features/user/user.slice";
import SnackbarComponent from "@/component/atom/snackbarComponent";

const Setting = () => {
  const error = useAppSelector((state) => state.userReducer?.error);
  const errorMessage = typeof error === 'object' ? "" : error;
  const dispatch=useAppDispatch();
  
  const clearErrors=()=>{
    dispatch(addError(""))
  }
  useEffect(() => {
    clearErrors();
  }, []);
  return (
    <>
      <Box display="flex" h="100%">
        <Box w="70%" m="20px" gap="10px" borderRadius="12px">
          <SettingContent />
        </Box>
        <Box w="30%" m="20px" gap="10px" bg="white" borderRadius="12px">
          <UserDetails />
        </Box>
        {errorMessage && (
        <SnackbarComponent
          message={errorMessage}
        />
      )}
      </Box>
    </>
  );
};

export default Setting;

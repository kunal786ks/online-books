"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Box, Container, Text } from "@chakra-ui/react";
import { GITHUB_ICON, GOOGLE_ICON } from "@/assests/icons";
import SignUp from "@/component/signup";
import "./index.scss";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addError } from "@/features/user/user.slice";
import SnackbarComponent from "@/component/atom/snackbarComponent";


export default function Home() {
  
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
    <Container className="homepage-container" suppressHydrationWarning={true}>
      <Box className="form-container">
        <Text
          mt="32px"
          fontSize="40px"
          color="rgb(255, 255, 255)"
          fontFamily="sans-serif"
          h="40px"
        >
          Welcome to the site
        </Text>
        <Text mt="0px" color="gray" alignItems="center">
          A virtual library to access and read books
        </Text>

        <SignUp />

        <Text className="hr-lines" fontSize="xl">
          Or
        </Text>

        <Text color="lightgray" mt="10px" fontSize="20px">
          Login with
        </Text>
        <Box
          mt="20px"
          display="flex"
          width="200px"
          height="40px"
          justifyContent="space-between"
        >
          <Text height="40px" width="40px" cursor="pointer">
            <GOOGLE_ICON />
          </Text>
          <Text height="40px" width="40px" cursor="pointer">
            <GITHUB_ICON />
          </Text>
        </Box>
      </Box>
      <Box className="image-container">
        <Image
          src="/image.png"
          alt="this is image"
          height={861}
          width={900}
          style={{ border: "none" }}
        />
      </Box>
      {errorMessage && (
        <SnackbarComponent
          message={errorMessage}
        />
      )}
    </Container>
  );
}

"use client";
import { useEffect } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import LoginPageForm from "../../component/login";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addError } from "@/features/user/user.slice";
import "./index.scss";
import SnackbarComponent from "@/component/atom/snackbarComponent";

const LoginPage = () => {
  

  const error = useAppSelector((state) => state.userReducer?.error);
  const errorMessage = typeof error === "object" ? "" : error;
  
  const dispatch = useAppDispatch();

  const clearErrors = () => {
    dispatch(addError(""));
  };
  
  useEffect(() => {
    clearErrors();
  }, []);

  return (
    <Container className="login-container">
      <Box className="login-form-container">
        <Text fontSize="40px" mt="30px" color="rgb(30, 23, 38)">
          Welcome Back
        </Text>
        <LoginPageForm />
      </Box>
      {errorMessage && (
        <SnackbarComponent
          message={errorMessage}
        />
      )}
    </Container>
  );
};

export default LoginPage;

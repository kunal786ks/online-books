"use client";
import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  EMAIL_ICON,
  HIDE_PASS_ICON,
  PASS_ICON,
  SHOW_PASS_ICON,
  USER_ICON,
} from "@/assests/icons";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addUserDetails } from "@/features/user/user.action";
import { addError } from "@/features/user/user.slice";

const SignUp = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const [routerLoading, setRouterLoading] = useState(false);
  const loading = useAppSelector((state) => state.userReducer?.loading);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setShow(!show);
  };
  const handleClickConfirm = () => {
    setConfirm(!confirm);
  };
  const handleClick2 = () => {
    router.push("/login");
  };

  const registerUser = async () => {
    if (!userName || !email || !password) {
      dispatch(addError("All Feilds are required"));
      return;
    }
    if (password !== confirmPass) {
      dispatch(addError("Confirm password and password doesn't match"));
      return;
    }
    try {
      const addUserPayload: addUserInterface = {
        userName,
        email,
        password,
      };
      const res = await dispatch(addUserDetails(addUserPayload));
      if (res.meta.requestStatus === "fulfilled") {
        setRouterLoading(true);
        router.push("/dashboard");
      }
    } catch (error) {}
  };
  return (
    <>
      <Stack
        height="400px"
        display="flex"
        alignItems="center"
        mt="40px"
        width="100%"
        gap="20px"
      >
        <FormControl>
          <InputGroup
            width="480px"
            height="60px"
            bg="rgb(32, 60, 87)"
            alignItems="center"
            style={{ borderRadius: "12px" }}
          >
            <InputLeftAddon ml="10px" height="20px">
              <USER_ICON />
            </InputLeftAddon>
            <Input
              autoComplete="one-time-code"
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              border="none"
              h="40px"
              fontSize="20px"
              marginLeft="10px"
              bg="none"
              outline="none"
              color="white"
              _placeholder={{ color: "lightgrey" }}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup
            width="480px"
            height="60px"
            bg="rgb(32, 60, 87)"
            alignItems="center"
            style={{ borderRadius: "12px" }}
          >
            <InputLeftAddon ml="10px">
              <EMAIL_ICON />
            </InputLeftAddon>
            <Input
              autoComplete="one-time-code"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              border="none"
              h="40px"
              fontSize="20px"
              marginLeft="10px"
              bg="none"
              outline="none"
              color="white"
              _placeholder={{ color: "lightgrey" }}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup
            width="480px"
            height="60px"
            bg="rgb(32, 60, 87)"
            alignItems="center"
            style={{ borderRadius: "12px" }}
          >
            <InputLeftAddon ml="10px">
              <PASS_ICON />
            </InputLeftAddon>
            <Input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              border="none"
              h="40px"
              width="100%"
              fontSize="20px"
              marginLeft="10px"
              bg="none"
              outline="none"
              color="white"
              _placeholder={{ color: "lightgrey" }}
            />
            <InputRightAddon mr="10px" onClick={handleClick} cursor="pointer">
              {show ? <HIDE_PASS_ICON /> : <SHOW_PASS_ICON />}
            </InputRightAddon>
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup
            width="480px"
            height="60px"
            bg="rgb(32, 60, 87)"
            alignItems="center"
            style={{ borderRadius: "12px" }}
          >
            <InputLeftAddon ml="10px" cursor="pointer">
              <PASS_ICON />
            </InputLeftAddon>
            <Input
              type={confirm ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              border="none"
              h="40px"
              width="100%"
              fontSize="20px"
              marginLeft="10px"
              bg="none"
              outline="none"
              color="white"
              _placeholder={{ color: "lightgrey" }}
            />
            <InputRightAddon mr="10px" onClick={handleClickConfirm}>
              {confirm ? <HIDE_PASS_ICON /> : <SHOW_PASS_ICON />}
            </InputRightAddon>
          </InputGroup>
        </FormControl>
        <Button
          isLoading={loading || routerLoading}
          onClick={registerUser}
          height="60px"
          fontSize="20px"
          border="none"
          width="480px"
          cursor="pointer"
          bg="rgb(95, 183, 253)"
          borderRadius="12px"
          color="white"
        >
          Join Now
        </Button>
      </Stack>
      <Text
        color="white"
        mr="auto"
        ml="60px"
        onClick={handleClick2}
        cursor="pointer"
        textDecoration="underline"
      >
        Already Register? Login
      </Text>
    </>
  );
};

export default SignUp;

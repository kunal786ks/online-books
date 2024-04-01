"use client";
import { useState } from "react";
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
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addError } from "@/features/user/user.slice";
import { loginUserDetails } from "@/features/user/user.action";
import { useRouter } from "next/navigation";
const LoginPageForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState(false);
  const [routerLoading, setRouterLoading] = useState(false);
  const loading = useAppSelector((state) => state.userReducer.loading);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClick = () => {
    setShow(!show);
  };
  const handleLogin = async () => {
    if (!email || !password) {
      dispatch(addError("All Feilds are required"));
      return;
    }
    try {
      const payload: getUserInterface = {
        email,
        password,
      };
      const res = await dispatch(loginUserDetails(payload));
      
      if (res.meta.requestStatus === "fulfilled") {
        setRouterLoading(true)
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
        mt="20px"
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
            <InputLeftAddon ml="10px">
              <EMAIL_ICON />
            </InputLeftAddon>
            <Input
              autoComplete="one-time-code"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              height="40px"
              border="none"
              bg="rgb(32, 60, 87)"
              width="100%"
              _placeholder={{ color: "lightgrey", marginLeft: "10px" }}
              fontSize="20px"
              marginLeft="10px"
              outline="none"
              color="white"
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
              height="40px"
              border="none"
              bg="rgb(32, 60, 87)"
              width="100%"
              _placeholder={{ color: "lightgrey", marginLeft: "10px" }}
              fontSize="20px"
              marginLeft="10px"
              outline="none"
              color="white"
            />
            <InputRightAddon mr="10px" onClick={handleClick} cursor="pointer">
              {show ? <HIDE_PASS_ICON /> : <SHOW_PASS_ICON />}
            </InputRightAddon>
          </InputGroup>
        </FormControl>

        <Button
        isLoading={loading || routerLoading}
          className="login-btn"
          onClick={handleLogin}
          h="60px"
          w="480px"
          fontSize="20px"
          cursor="pointer"
          border="none"
          bg="rgb(30, 13, 33)"
          borderRadius="10px"
          color="white"
        >
          Login Now
        </Button>
        <Text color="rgb(32, 60, 87)" fontSize="20px">
          No Account yet? <Link href="/">Register</Link>
        </Text>
      </Stack>
    </>
  );
};

export default LoginPageForm;

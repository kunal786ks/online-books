"use client";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Popover, Typography } from "@mui/material";
import { Box, Button, Container } from "@chakra-ui/react";
import { MODE, NOTI_ICON } from "@/assests/icons";
import AvatarComponent from "@/component/atom/avatarComponent";
import MenuBar from "@/component/menu_bar";
import SearchComponent from "@/component/molecules/search";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/features/user/user.slice";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const userDetails = useAppSelector((state) => state.userReducer);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("/login");
  };

  const handleNaviagte = () => {};
  return (
    <div>
      <Container display="flex">
        <Box height="100vh" bg="rgb(255, 255, 255)" width="300px">
          <MenuBar />
        </Box>
        <Box w="100%">
          <Box
            height="6vh"
            display="flex"
            justifyContent="space-between"
            w="100%"
          >
            <SearchComponent />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mr="20px"
              gap="20px"
            >
              <Box
                bg="rgb(242, 246, 255)"
                h="30px"
                w="30px"
                border="1px solid lightgray"
                borderRadius="50%"
                alignItems="center"
                display="flex"
                justifyContent="center"
              >
                <MODE />
              </Box>
              <Box
                bg="rgb(242, 246, 255)"
                h="30px"
                w="30px"
                border="1px solid lightgray"
                borderRadius="50%"
                alignItems="center"
                display="flex"
                justifyContent="center"
              >
                <NOTI_ICON />
              </Box>
              <Box cursor="pointer" onClick={handleClick}>
                <AvatarComponent
                  height="35px"
                  width="35px"
                  name={userDetails?.user?.userName}
                  url={userDetails?.userImage}
                />
              </Box>
              {userDetails?.user?.userName && (
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Typography
                    sx={{
                      p: 3,
                      "&:hover": {
                        backgroundColor: "rgb(211, 211, 211)",
                        cursor: "pointer",
                      },
                    }}
                    onClick={handleNaviagte}
                  >
                    {userDetails?.user?.userName &&
                      userDetails?.user?.userName.charAt(0).toUpperCase() +
                        userDetails?.user?.userName.slice(1)}
                  </Typography>
                  <Button
                    cursor="pointer"
                    width="60px"
                    h="40px"
                    ml="14px"
                    mb="10px"
                    mr="10px"
                    border="none"
                    borderRadius="50%"
                    onClick={handleLogout}
                  >
                    <LogoutIcon htmlColor="rgb(45, 58, 82)" />
                  </Button>
                </Popover>
              )}
            </Box>
          </Box>
          <Box bg="rgb(246, 249, 254)" h="94vh">
            {children}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default LayoutComponent;

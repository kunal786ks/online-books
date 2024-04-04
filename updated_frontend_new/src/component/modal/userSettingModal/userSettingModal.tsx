import { useState } from "react";
import { Box, Modal } from "@mui/material";
import {Box as ChakraBox, Text} from "@chakra-ui/react";
import AvatarComponent from "@/component/atom/avatarComponent";
import { useAppSelector } from "@/store/store";

const UserSettingModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const userDetails=useAppSelector(state=>state.userReducer);
  const style = {
    position: "absolute" as "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "white",
    pt: 2,
    px: 4,
    pb: 3,
    border: "none",
    borderRadius: "12px",
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <span onClick={handleOpen}>{children}</span>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ background: "transparent" }}
      >
        <Box sx={{...style}}>
            <ChakraBox display="flex"  width="100%" mt="20px" bg="rgb(244, 246, 255)" height="200px" alignItems="center" padding="20px" borderRadius="12px" justifyContent="center">
                <AvatarComponent url={userDetails?.userImage} name={userDetails?.user?.userName} height="150px" width="150px"/>
                <ChakraBox>
                    <Text></Text>
                </ChakraBox>
            </ChakraBox>
        </Box>
      </Modal>
    </>
  );
};

export default UserSettingModal;

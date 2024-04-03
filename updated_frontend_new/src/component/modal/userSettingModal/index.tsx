"use client";
import { useState } from "react";
import { Modal, Box, CircularProgress } from "@mui/material";
import { Text, Box as ChakraBox, Input, Button } from "@chakra-ui/react";
import AvatarComponent from "@/component/atom/avatarComponent";
import { useAppSelector } from "@/store/store";
import { updateProfilePic } from "@/features/user/user.action";
import { useAppDispatch } from "@/store/store";

const UserImageModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<any>(null);

  const dispatch=useAppDispatch();

  const userDetails=useAppSelector(state=>state.userReducer);

  function previewFiles(files: any) {
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      previewFiles(e.target.files[0]);
    }
  };
  const style = {
    position: "absolute" as "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
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
  const handleUpload=async()=>{
    try {
      const payload:updateProfileInterface={
        userId:userDetails?.user?.id,
        image:image
      }
      const res=await dispatch(updateProfilePic(payload));
      if(res.meta.requestStatus==="fulfilled"){
        setOpen(false);
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <span onClick={handleOpen}>{children}</span>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ background: "transparent" }}
      >
        <Box
          sx={{
            ...style,
            width: "30%",
          }}
        >
          <Box alignItems="center">
            <Text fontSize="20px" fontWeight="bold" color="grey">
              Update Your Profile Pic
            </Text>
            <ChakraBox mt="20px" display="flex" height="100px" w="100%">
              <ChakraBox display="flex" alignItems="center" gap="20px">
                <ChakraBox position="relative">
                  <ChakraBox
                    position="absolute"
                    zIndex="100"
                    top="30%"
                    left="20%"
                    width="100%"
                  >
                    {userDetails?.loading && <CircularProgress />}
                  </ChakraBox>
                  <AvatarComponent
                    url={userDetails?.userImage}
                    name="username"
                    height="90px"
                    width="90px"
                  />
                </ChakraBox>

                <Input
                  type="file"
                  accept=".png, .jpg, .jpeg, .jfif"
                  id="file-input"
                  display="none"
                  onChange={handleFileChange}
                />
                <label htmlFor="file-input">
                  <Button
                    as="span"
                    h="30px"
                    w="100px"
                    border="none"
                    borderRadius="50px"
                    color="white"
                    fontSize="15px"
                    bg="rgb(45, 58, 82)"
                  >
                    Choose Pic
                  </Button>
                </label>
                <Text color="gray">{file && file.name}</Text>
              </ChakraBox>
            </ChakraBox>
            <ChakraBox width="100%" display="flex">
              <Button
                ml="auto"
                width="25%"
                isLoading={userDetails?.loading}
                border="none"
                borderRadius="20px"
                height="40px"
                fontSize="18px"
                cursor="pointer"
                disabled={!file}
                color="white"
                bg="rgb(76, 167, 253)"
                onClick={handleUpload}
              >
                {file ? "Upload" : "Choose file"}
              </Button>
            </ChakraBox>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default UserImageModal;

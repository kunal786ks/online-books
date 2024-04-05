import { ChangeEvent, useState } from "react";
import { Box, Modal } from "@mui/material";
import { Button, Box as ChakraBox, Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import AvatarComponent from "@/component/atom/avatarComponent";
import { useAppDispatch, useAppSelector } from "@/store/store";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import HomeIcon from '@mui/icons-material/Home';
import { updateGenralInfo } from "@/features/user/user.action";
import { addError } from "@/features/user/user.slice";

const UserSettingModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebSite] = useState("");
  const [address, setAddress] = useState("");

  const userDetails = useAppSelector(state => state.userReducer);

  const dispatch = useAppDispatch();

  const style = {
    position: "absolute" as "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "400px",
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
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let input: string = e.target.value.replace(/\D/g, '');


    if (input.length > 10) {
      input = input.slice(0, 10);
    }

    let formattedInput: string = input;

    if (input.length > 5) {
      formattedInput = `${input.slice(0, 5)}-${input.slice(5)}`;
    }

    setPhoneNumber(formattedInput);
  };
  const handleSubmit = async () => {
    try {
      if(!phoneNumber || !website || !address){
        dispatch(addError("All Feilds are required"))
        return;
      }
      const payload: updateInterface = {
        userId: userDetails?.user?.id,
        phone: phoneNumber,
        website,
        address
      }
     
      const response = await dispatch(updateGenralInfo(payload))
      console.log(response, "this is from component")
      if(response.meta.requestStatus==="fulfilled"){
        dispatch(addError("User Updated Successfully"))
        setOpen(false);
      }
    } catch (error) {

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
        <Box sx={{ ...style }}>

          <ChakraBox display="flex" width="100%" mt="20px" bg="rgb(244, 246, 255)" height="94%" alignItems="center" padding="20px" borderRadius="12px" gap="40px">
            <AvatarComponent url={userDetails?.userImage} name={userDetails?.user?.userName} height="150px" width="150px" />
            <ChakraBox h="100%" >
              <Text fontSize="40px" color="rgb(133, 135, 139)">General Information</Text>
              <span style={{ color: "grey" }}>Update your information,all the information remain confidentials</span>
              <InputGroup
                mt="20px"
                border="1px solid rgb(217, 229, 253)"
                borderRadius="12px"
                height="50px"
                alignItems="center"
              >
                <InputLeftAddon ml="10px">
                  <LocalPhoneIcon
                    htmlColor="rgb(176, 201, 251)"
                    sx={{ fontSize: "35px" }}
                  />
                </InputLeftAddon>
                <Input
                  autoComplete="one-time-code"
                  type='tel'
                  placeholder="Your Tel. No"
                  border="none"
                  h="30px"
                  value={phoneNumber}
                  onChange={handleInputChange}
                  bg="none"
                  _placeholder={{ color: "rgb(185, 193, 204)" }}
                />
              </InputGroup>
              <InputGroup
                mt="20px"
                border="1px solid rgb(217, 229, 253)"
                borderRadius="12px"
                height="50px"
                alignItems="center"
              >
                <InputLeftAddon ml="10px">
                  <LanguageIcon
                    htmlColor="rgb(176, 201, 251)"
                    sx={{ fontSize: "35px" }}
                  />
                </InputLeftAddon>
                <Input
                  autoComplete="one-time-code"
                  type='text'
                  placeholder="ADD YOUR WORK STATION"
                  value={website}
                  onChange={(e) => setWebSite(e.target.value)}
                  border="none"
                  h="30px"
                  bg="none"
                  _placeholder={{ color: "rgb(185, 193, 204)" }}
                />
              </InputGroup>
              <InputGroup
                mt="20px"
                border="1px solid rgb(217, 229, 253)"
                borderRadius="12px"
                height="50px"
                alignItems="center"
              >
                <InputLeftAddon ml="10px">
                  <HomeIcon
                    htmlColor="rgb(176, 201, 251)"
                    sx={{ fontSize: "35px" }}
                  />
                </InputLeftAddon>
                <Input
                  autoComplete="one-time-code"
                  type='tel'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="YOUR ADDRESS"
                  border="none"
                  h="30px"
                  bg="none"
                  _placeholder={{ color: "rgb(185, 193, 204)" }}
                />
              </InputGroup>
            </ChakraBox>
            <Button isLoading={userDetails?.loading} border="none" height="40px" size="20px" color="white" width="100px" cursor="pointer" onClick={handleSubmit} borderRadius="120px" bg="rgb(76, 167, 253)" mb="auto" ml="auto">save</Button>
          </ChakraBox>


        </Box>
      </Modal>
    </>
  );
};

export default UserSettingModal;

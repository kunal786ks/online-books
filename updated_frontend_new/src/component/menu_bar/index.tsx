"use client";
import { useState } from "react";
import {  Box, Text } from "@chakra-ui/react";

import AvatarComponent from "../atom/avatarComponent";
import { menuItem } from "./menuItems";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/store";

const MenuBar = () => {
  const [seleceted, setSelected] = useState<Number>(0);
  const router = useRouter();

  const userDetails=useAppSelector(state=>state.userReducer)
  const handleSelect = (index: number, menu: menuItemInterface) => {
    setSelected(index);
    router.push(menu.path);
  };
  return (
    <Box
      mt="12px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      flexDir="column"
    >
      <Box display="flex" alignItems="center" gap="20px">
        <AvatarComponent
          height="50px"
          width="50px"
          name="logo"
          url="https://res.cloudinary.com/dmk7whebr/image/upload/v1712122291/User_Profile/hzdfebfaboqgu05zycfa.jpg"
        />
        <Text
          fontSize="20px"
          color="rgb(83, 96, 116)"
          fontFamily="cursive"
          textDecoration="underline"
        >
          Online books!
        </Text>
      </Box>
      <Box ml="10px" mr="10px" h="400px" w="90%" mt="30px">
        {menuItem?.map((menu: menuItemInterface, index: number) => (
          <Box
            key={index}
            height="40px"
            bg={seleceted === index ? "rgb(242, 246, 255)" : ""}
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="10px"
            gap="20px"
            borderRadius="12px"
            _hover={{ bg: "rgb(242, 246, 255)" }}
            onClick={() => handleSelect(index, menu)}
          >
            <Text alignItems="center" display="flex" height="30px" ml="auto">
              {menu.icon}
            </Text>
            <Text
              fontSize="18px"
              mr="auto"
              color="rgb(69, 74, 87)"
              alignItems="center"
              display="flex"
              w="50%"
              _hover={{ color: "rgb(83, 96, 116)" }}
            >
              {menu.label}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MenuBar;

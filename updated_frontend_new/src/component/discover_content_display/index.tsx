"use client";
import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { discoverMenuData } from "./discover.menu";
import Books from "./books";
import Authors from "./authors";
import Blogs from "./blogs";
import Favourites from "./favourites";

const DiscoverContent = ({selectedMenu,setSelectedMenu}:{selectedMenu:Number,setSelectedMenu:(key:number)=>void}) => {
  
  const [selected, setSelected] = useState<Number>(0);

  useEffect(()=>{
    setSelected(selectedMenu)
  },[selectedMenu])
  
  const handleClick = (index:number) => {
    setSelected(index)
    setSelectedMenu(index)
  };
  const renderContent = () => {
    switch (selected) {
      case 0:
        return <Books />;
      case 1:
        return <Authors/>
      case 2:
        return <Blogs/>
      case 3:
        return <Favourites/>
      default:
        return null;
    }
    
  };
  return (
    <>
      <Box width="100%" display="flex" gap="30px">
        {discoverMenuData.map((menu: discoverMenuInterface, key: number) => (
          <Text
            key={key}
            fontSize="20px"
            color="rgb(133, 133, 133)"
            onClick={()=>handleClick(key)}
            borderBottom={selected === key ? "2px solid rgb(60, 202, 144)" : ""}
            cursor="pointer"
          >
            {menu.label}
          </Text>
        ))}
      </Box>
      <Box height="100%"  mt="20px" mb="20px"  overflow="hidden">
        {renderContent()}
      </Box>
    </>
  );
};

export default DiscoverContent;

"use client";
import { Box, Text } from "@chakra-ui/react";

import ImageComponent from "../atom/imageComponent";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";

const SingleBook = () => {
  const [progress, setProgress] = useState(50);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }, []);
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexDir="row"
      width="100%"
      m="10px"
    >
      <Text ml="10px">
        <ImageComponent
          alt="bookname"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fDUHu1AEFR_RQimBYpPUs-EHxQgKshGdsuKJJ9oUVhpXOQIM-30IY-tcOg&s"
          height="50px"
          width="50px"
        />
      </Text>

      <Text mr="auto" ml="30px" style={{color:"rgb(128, 136, 155)",fontWeight:"600px"}}>
        The Secret of Company
      </Text>
      <Text ml="50px" mr="50px" width="50%">
        {" "}
        <LinearProgress variant="determinate" value={progress} />
      </Text>
      <Text mr="30px">50% complete</Text>
    </Box>
  );
};

export default SingleBook;

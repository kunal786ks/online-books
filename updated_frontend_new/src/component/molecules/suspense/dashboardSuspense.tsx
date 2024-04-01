"use client";
import { Box } from "@chakra-ui/react";

const DashboardSuspense = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Box h="100%" w="100%" p="20px" display="flex">
        <Box w="70%" m="20px" gap="20px" display="flex" flexDir="column">
          <Box h="70%" w="100%" bg="white" borderRadius="12px"></Box>
          <Box h="30%" w="100%" bg="white" borderRadius="12px"></Box>
        </Box>
        <Box
          w="30%"
          m="20px"
          gap="10px"
          display="flex"
          flexDir="column"
          borderRadius="12px"
        >
          <Box h="40%" w="100%" bg="white" borderRadius="12px"></Box>
          <Box h="60%" w="100%" bg="white" borderRadius="12px"></Box>
        </Box>
      </Box>
    </div>
  );
};

export default DashboardSuspense;

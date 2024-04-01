import { Box, Text } from "@chakra-ui/react";

const DiscoverSuspense = () => {
  return (
    <div style={{ height: "100%" }}>
      <Box h="100%" w="100%" p="20px" display="flex">
        <Box bg="white" borderRadius="12px" h="100%" w="100%">
          <Text
            m="20px"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
            color="rgb(133, 133, 133)"
          >
            Discover
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default DiscoverSuspense;

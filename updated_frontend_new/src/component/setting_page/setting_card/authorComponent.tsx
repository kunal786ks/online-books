'use client'
import { Box, Text } from '@chakra-ui/react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AuthorCard from '../setting_nested_Card/authorCard';

const AuthorComponent = () => {
  return (
    <Box h="100%" bg="rgb(243, 246, 255)" w="100%" borderRadius="12px">
      <Box display="flex" justifyContent="space-between">
        <Text padding="10px" color="gray" fontSize="30px">
          Authors
        </Text>
        <Box>
          <MoreVertIcon htmlColor="grey" sx={{ margin: "10px", cursor: "pointer" }} />
        </Box> 
      </Box>
        <Box ml="10px" mr="10px" mt="5px"height="70%">
          <AuthorCard/>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" mt="10px" cursor="pointer">
            {/* here we need to add modal to see all */}
            <Text fontSize="18px" color="grey">
                See all
            </Text>
            <ExpandMoreIcon htmlColor="grey"/>
        </Box>
    </Box>
  )
}

export default AuthorComponent

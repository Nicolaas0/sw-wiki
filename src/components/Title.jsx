import React from "react";
import { Text, Link, Flex, Box } from "@chakra-ui/react";
const Title = () => {
  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      my={1}
      h={'10%'}
    >
      <Box>
        <Text fontFamily={"space"} fontSize={25} color={'yellow'}>
          StarWars Wiki
        </Text>
        <Text fontFamily={"overpass"} fontWeight={"bold"} fontSize={13} textAlign={'center'} color={"grey"}>
          Powered by <Link fontFamily={"overpass"}>SWAPI</Link>
        </Text>
      </Box>
      
    </Flex>
  );
};
export default Title;

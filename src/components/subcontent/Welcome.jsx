import { Button, Flex, Image, Text } from "@chakra-ui/react";
const Welcome = ({ setType }) => {
  return (
    <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"} minH={'auto'}  h={'100%'} mt='30'>
      <Text fontFamily={'space'} fontSize={'60'} color={'yellow'}>Welcome to Star Wars Wiki</Text>
      <Text fontFamily={'space'} fontSize={'20'} color={'gray'}>Powered by SWAPI</Text>
    </Flex>
  );
};
export default Welcome;

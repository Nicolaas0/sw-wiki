import { Box } from "@chakra-ui/react";
const ContentWrapper = ({ children }) => {
  return <Box minH={'auto'} maxH={"70%"} w={'100%'}>{children}</Box>;
};
export default ContentWrapper;

import { GridItem } from "@chakra-ui/react";

const ListItem = ({ children }) => {
  return <GridItem w='auto' h='auto' border={'1px'} textAlign={'center'}>{children}</GridItem>;
};
export default ListItem;

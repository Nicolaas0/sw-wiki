import { Grid } from "@chakra-ui/react";
const ListWrapper = ({ children }) => {
  return (
    <Grid
      minH={"auto"}
      maxH={"70%"}
      templateColumns="repeat(4, 1fr)"
      gap={6}
      w={"auto"}
    >
      {children}
    </Grid>
  );
};
export default ListWrapper;

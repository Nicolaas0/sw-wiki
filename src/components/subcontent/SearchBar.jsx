import { Flex } from "@chakra-ui/react";
import SearchInput from "../../UI/SearchInput";
import { useData } from "../Context/DataContext";

const SearchBar = () => {
  const { type, setURL } = useData();
  return (
    <Flex
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      my={"1"}
    >
      <SearchInput setUrl={setURL} type={type} />
    </Flex>
  );
};

export default SearchBar;

import { Flex, Input } from "@chakra-ui/react";
import SearchInput from "../UI/SearchInput";

const SearchBar = ({ type, setUrl }) => {
  return (
    <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} my={'1'}>
      <SearchInput setUrl={setUrl} type={type}/>
    </Flex>
  );
};

export default SearchBar;

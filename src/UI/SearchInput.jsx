import { Input } from "@chakra-ui/react";

const SearchInput = ({setUrl, type}) => {
  const searchHandler = (i) => {
    setUrl(`https://swapi.dev/api/${type}/?search=${i}`);
  };
  return (
    <>
      <Input w='30%' onChange={(e)=>{searchHandler(e.target.value)}} _focus={{borderColor:'white',color:'white'}} my={'1'} borderColor={'white'} color={'white'} placeholder={`Search on ${type[0].toUpperCase()+type.slice(1)}`}/>
    </>
  );
};
export default SearchInput;

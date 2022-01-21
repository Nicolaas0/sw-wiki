import { Flex } from "@chakra-ui/react"
import ContentNavBtn from "./ContentNavButton"

const NavBtn = ({setUrl,data}) =>{
    return(
        <Flex flexDir={'row'} justifyContent={'center'} alignItems={'center'} my={'3'}>
        {data && data.previous && <ContentNavBtn setURL={setUrl} nav={data.previous}>Prev</ContentNavBtn>}
        {data && data.next && <ContentNavBtn setURL={setUrl} nav={data.next}>Next</ContentNavBtn>}
        </Flex>
    )
}
export default NavBtn
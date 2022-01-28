import React from 'react'
import { Flex} from '@chakra-ui/react'
import Links from '../UI/NavLink'
import { useData } from './Context/DataContext';


const Navigation = () =>{
    const {setURL, setType, type, URL_LIST, setData } = useData();

    return(
        <Flex flexDir='row' justifyContent='space-around' h={'10%'}>
            <Links type={type} setType={setType} setURL={setURL} setData={setData} url={URL_LIST.people}>People</Links>
            <Links type={type} setType={setType} setURL={setURL} setData={setData} url={URL_LIST.starships}>Starships</Links>
            <Links type={type} setType={setType} setURL={setURL} setData={setData} url={URL_LIST.planets}>Planets</Links>
            <Links type={type} setType={setType} setURL={setURL} setData={setData} url={URL_LIST.vehicles}>Vehicles</Links>
            <Links type={type} setType={setType} setURL={setURL} setData={setData} url={URL_LIST.species}>Species</Links>
            <Links type={type} setType={setType} setURL={setURL} setData={setData} url={URL_LIST.films}>Films</Links>
        </Flex>
    )    
}

export default Navigation